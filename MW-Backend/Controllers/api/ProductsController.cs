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
using MW_Backend.DTO_Resourses;
using MW_Backend.Helpers;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Controllers.api
{
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