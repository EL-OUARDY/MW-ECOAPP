using AutoMapper;
using MW_Backend.DTOs;
using MW_Backend.Helpers;
using MW_Backend.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace MW_Backend.Areas.Admin.Controllers
{
    public class AdminUploadsController : ApiController
    {
        private ApplicationDbContext db;
        public AdminUploadsController()
        {
            db = new ApplicationDbContext();
        }

        [HttpPost]
        [Route("api/upload/addProductImages")]
        public async Task<IHttpActionResult> AddProductImages() 
        {
            int ProductId = int.Parse(HttpContext.Current.Request["ProductId"]);
            var files = HttpContext.Current.Request.Files;

            // verify the existance of product, but Pointless coz this only called once a product being added
            if (!ProductExists(ProductId)) 
            {
                return NotFound();
            }

            // Check the existance of images within the request object..
            if (files["MainImg"] == null || files.GetMultiple("GalleryImgs").Count == 0) //DescImages aren't mandatory
            {
                return BadRequest("Main Image And Gallery Images Are Required");
            }

            var _dir = new Product_Dir(ProductId);
            var task = Task.Run(() => _dir.AddProductImages(files));

            if (!await task)
            {
                return BadRequest("A Problem Has Occured While Uploading Images !!");
            }

            var model = db.Products.Find(ProductId);

            return Ok(Mapper.Map<mProductDTO>(model));
        }

        [HttpPost]
        [Route("api/upload/updateProductImages")]
        public async Task<IHttpActionResult> UpdateProductImages() 
        {
            int ProductId = int.Parse(HttpContext.Current.Request["ProductId"]);
            var files = HttpContext.Current.Request.Files;

            var GalleryImgsDrop = JsonConvert.DeserializeObject<string[]>(HttpContext.Current.Request["GalleryImgsDrop"]);
            var DescImgsDrop = JsonConvert.DeserializeObject<string[]>(HttpContext.Current.Request["DescImgsDrop"]);

            // verify the existance of product
            if (!ProductExists(ProductId))
            {
                return NotFound();
            }
            var _dir = new Product_Dir(ProductId);
            var task = Task.Run(() => _dir.updateProductImages(files, GalleryImgsDrop, DescImgsDrop));

            if (!await task)
            {
                return BadRequest("A Problem Has Occured While Uploading Images !!");
            }

            var model = db.Products.Find(ProductId);

            return Ok(Mapper.Map<mProductDTO>(model));
        }

        [HttpPost]
        [Route("api/upload/copyProductImages")]
        public async Task<IHttpActionResult> CopyProductImages() 
        {
            int ProductId = int.Parse(HttpContext.Current.Request["ProductId"]);
            int CopyingId = int.Parse(HttpContext.Current.Request["CopyingId"]);
            string mainImgFromCopy = HttpContext.Current.Request["mainImgFromCopy"];
            var files = HttpContext.Current.Request.Files;

            var GalleryImgsDrop = JsonConvert.DeserializeObject<string[]>(HttpContext.Current.Request["GalleryImgsDrop"]);
            var DescImgsDrop = JsonConvert.DeserializeObject<string[]>(HttpContext.Current.Request["DescImgsDrop"]);

            // verify the existance of the two products
            if (!ProductExists(ProductId) || !ProductExists(CopyingId))
            {
                return NotFound();
            }

            var _dir = new Product_Dir(ProductId);
            var task = Task.Run(() => _dir.CopyProductImages(files, GalleryImgsDrop, DescImgsDrop, CopyingId, mainImgFromCopy));

            if (!await task)
            {
                return BadRequest("A Problem Has Occured While Uploading Images !!");
            }

            var model = db.Products.Find(ProductId);

            return Ok(Mapper.Map<mProductDTO>(model));
        }

        [HttpPost]
        [Route("api/upload/ReplaceMainImg")]
        public async Task<IHttpActionResult> ReplaceMainImg(ReplaceImageModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var _dir = new Product_Dir(model.id);
            var task = Task.Run(() => _dir.ReplaceMainImg(model.filename));

            if (!await task)
            {
                return BadRequest("A Problem Has Occured While trying to replace product main image !");
            }

            return Ok();
        }

        private bool ProductExists(int id)
        {
            return db.Products.Count(e => e.Id == id) > 0;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

    }
}