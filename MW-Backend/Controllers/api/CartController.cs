using AutoMapper;
using MW_Backend.DTO_Resourses;
using MW_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using MW_Backend.Helpers;

namespace MW_Backend.Controllers.api
{
    public class CartController : ApiController
    {
        private ApplicationDbContext db;

        public CartController()
        {
            db = new ApplicationDbContext();
        }

        // GET: api/ValidateCart  // might be asyn
        [HttpPost]
        [Route("api/ValidateCart")]
        public IHttpActionResult ValidateCart(CartItem[] PostedCart)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            return Ok( CartHelper.getValidCart(PostedCart) );
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
