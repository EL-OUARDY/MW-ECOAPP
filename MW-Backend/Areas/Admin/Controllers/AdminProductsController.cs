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
using MW_Backend.Areas.Admin.ViewModel;
using MW_Backend.DTOs;
using MW_Backend.Helpers;
using MW_Backend.Models;
using MW_Backend.Models.Data;
using Newtonsoft.Json;

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

        // POST: api/AdminProducts
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

        // PUT: api/AdminProducts/5
        [HttpPut]
        [Route("api/UpdateProducts/{id}")]
        public IHttpActionResult PutAdminProduct(int id, ProductDTO productDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productDto.Id)
            {
                return BadRequest();
            }

            var product = Mapper.Map<ProductDTO, Product>(productDto);
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

            return Ok(product.Id);
            // return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: api/AdminProducts/5
        [HttpGet]
        [Route("api/AdminProducts/{id}")]
        public IHttpActionResult GetAdminProduct(int id)
        {
            var model = db.Products.Where(x => x.Id == id).FirstOrDefault();

            if (model == null)
            {
                return NotFound();
            }

            return Ok( Mapper.Map<ProductDTO>(model) );
        }

        [HttpPost]
        [Route("api/ReplaceMainImg")]
        public IHttpActionResult ReplaceMainImg(ReplaceImageModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int id = model.id;
            string filename = model.filename;

            bool isOk = DirectoryHelper.ReplaceMainImg(id, filename);

            if (!isOk)
            {
                return BadRequest("A Problem Has Occured While trying to replace product main image !");
            }

            return Ok();
        }

        [HttpPost]
        [Route("api/AdminProducts/upload-images")]
        public IHttpActionResult UploadImages() // upload images & edit images ..
        {
            string Job = HttpContext.Current.Request["Job"];
            int ProductId = int.Parse(HttpContext.Current.Request["ProductId"]);
            var files = HttpContext.Current.Request.Files;

            var GalleryImgsDrop = JsonConvert.DeserializeObject<string[]>(HttpContext.Current.Request["GalleryImgsDrop"]);
            var DescImgsDrop = JsonConvert.DeserializeObject<string[]>(HttpContext.Current.Request["DescImgsDrop"]);

            if (Job == null) // what this method does depends on this variable
            {
                return BadRequest("Request's job is not defined !");
            }

            // verify the existance of product
            if ( !ProductExists(ProductId))
            {
                return NotFound();
            }

            // Check the existance of images within the request object..

            if ( Job == FormJob.Add && (files["MainImg"] == null ||
                files.GetMultiple("GalleryImgs").Count == 0)) //DescImages aren't mandatory
            {
                return BadRequest("Main Image And Gallery Images Are Required");
            }

            bool success = DirectoryHelper.SaveProductImages(ProductId, files, GalleryImgsDrop, DescImgsDrop);

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

            try
            {
                db.Products.Remove(product);
                db.SaveChanges();
            }
            catch (Exception)
            {
                return BadRequest("Can't Remove this product - Unknown reason !");
            }

            // Remove Images Directory
            if (!DirectoryHelper.deleteProductImages(id))
            {
                return BadRequest("An error was occured while deleting images directory !");
            }

            return Ok();
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