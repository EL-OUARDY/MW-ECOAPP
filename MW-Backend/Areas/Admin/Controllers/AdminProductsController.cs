﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using MW_Backend.Areas.Admin.ViewModel;
using MW_Backend.DTOs;
using MW_Backend.Helpers;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Areas.Admin.Controllers
{
    // [Authorize] //Admin Role
    public class AdminProductsController : ApiController
    {
        private ApplicationDbContext db;

        public AdminProductsController()
        {
            db = new ApplicationDbContext();
        }

        // GET: api/AdminProducts
        [HttpGet]
        public IHttpActionResult GetAdminProducts(string stock = "")
        {
            IEnumerable<Product> products;

            if (stock == "in")
                products = db.Products.Where(x => x.OnSale == true).ToList();
            else 
            if (stock == "out")
                products = db.Products.Where(x => x.OnSale == false).ToList();
            else
                products = db.Products.ToList();

            return Ok( products.Select(Mapper.Map<Product, ProductListVM>));
        }

        // POST: api/AdminProducts/5
        [HttpPost]
        public IHttpActionResult PostAdminProduct(ProductDTO productDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = Mapper.Map<ProductDTO, Product>(productDto);
            db.Products.Add(product);
            db.SaveChanges();

            return Ok(product.Id);
        }

        [HttpPost]
        [Route("api/AdminProducts/upload-images")]
        public IHttpActionResult UploadImages()
        {
            int ProductId = int.Parse(HttpContext.Current.Request["ProductId"]);
            var files = HttpContext.Current.Request.Files;

            // verify the Id
            if (ProductExists(ProductId) == false)
            {
                return NotFound();
            }

            // Check the existance of images within the request object..

            if (files["MainImg"] == null || files.GetMultiple("GalleryImgs").Count == 0) //DescImages aren't mandatory
            {
                return BadRequest("Main Image And Gallery Images Are Required");
            }

            bool success = DirectoryHelper.SaveProductImages(files, ProductId); // should be async

            if (!success)
            {
                return BadRequest("A Problem Has Occured While Uploading Images, You have to check it manualy !");
            }

            var model = db.Products.Find(ProductId);

            return Ok(Mapper.Map<mProductDTO>(model));
        }

        // GET: api/last6
        [HttpGet]
        [Route("api/AdminProducts/history")]
        public IHttpActionResult history()
        {
            var products = db.Products.OrderByDescending(x => x.Id)
                                .Take(6)
                                .ToList()
                                .Select(Mapper.Map<Product, mProductDTO>);

            return Ok(products);
        }

        // DELETE: api/AdminProducts/5
        [Route("api/AdminProducts/{id}")]
        public IHttpActionResult DeleteAdminProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            // Remove Images Directory
            if (!DirectoryHelper.deleteProductImages(id))
            {
                return BadRequest("An error was occured while deleting images directory !");
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok();
        }

        // PUT: api/AdminProducts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAdminProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.Id)
            {
                return BadRequest();
            }

            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductExists(int id)
        {
            return db.Products.Count(e => e.Id == id) > 0;
        }
    }
}