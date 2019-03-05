using System;
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
using Microsoft.Ajax.Utilities;
using MW_Backend.DTOs;
using MW_Backend.Helpers;
using MW_Backend.Models;
using MW_Backend.Models.Data;
using MW_Backend.ViewModel;

namespace MW_Backend.Controllers.api
{
    // [Authorize] //Admin Role
    public class ProductsController : ApiController
    {
        private ApplicationDbContext db;

        public ProductsController()
        {
            db = new ApplicationDbContext();
        }

        // GET: api/Products
        [HttpGet]
        public IHttpActionResult GetProducts()
        {
            var products = db.Products
                    .ToList()
                    .Select(Mapper.Map<Product, mProductDTO>);

            return Ok(products);
        }

        // GET: api/Products/slug
        [ResponseType(typeof(Product))]
        public IHttpActionResult GetProduct(string slug)
        {
            var model = db.Products.Where(x => x.Slug == slug).FirstOrDefault();
            if (model == null)
            {
                return NotFound();
            }

            return Ok( Mapper.Map<Product, ProductDTO>(model) );
        }


        [HttpPost]
        [Route("api/upload-images")]
        public IHttpActionResult UploadImages()
        {
            int ProductId = int.Parse( HttpContext.Current.Request["ProductId"] );
            var files = HttpContext.Current.Request.Files;

            // verify the Id
            if ( ProductExists(ProductId) == false )
            {
                return NotFound();
            }

            // Check the existance of images .. => bad request 400

            if (files["MainImg"] == null || files.GetMultiple("GalleryImgs").Count == 0) //DescImages aren't mandatory
            {
                return BadRequest("Main Images And Gallery Images Are Required");
            }

            bool success = DirectoryHelper.SaveProductImages(files, ProductId); // should be async

            if (!success)
            {
                return BadRequest("A Problem Has Occured While Uploading Images, You have to check it manualy !");
            }

            var model = db.Products.Find(ProductId);

            return Ok( Mapper.Map<mProductDTO>(model) );
        }



        // POST: api/Products
        [HttpPost]
        public IHttpActionResult PostProduct(ProductDTO productDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = Mapper.Map<ProductDTO, Product>(productDto);
            db.Products.Add(product);
            db.SaveChanges();

            return Ok( product.Id );
        }

        // GET: api/last5
        [HttpGet]
        [Route("api/last5")]
        public IHttpActionResult Last5()
        {
            var products = db.Products.OrderByDescending(x => x.Id)
                                .Take(5)
                                .ToList()
                                .Select(Mapper.Map<Product, mProductDTO>);

            return Ok(products);
        }

        // DELETE: api/Products/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }

        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduct(int id, Product product)
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