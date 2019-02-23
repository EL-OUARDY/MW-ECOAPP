using AutoMapper;
using MW_Backend.DTOs;
using MW_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

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

            

            return Ok( getValidCart(PostedCart) );
        }

        [NonAction]
        private List<CartItem> getValidCart(CartItem[] PostedCart)
        {
            List<CartItem> Cart = new List<CartItem>();
            CartItem cartItem;

            foreach (var item in PostedCart)
            {
                var p = db.Products.Find(item.Product.Id);
                if (p != null && item.Quantity > 0)
                {
                    cartItem = new CartItem
                    {
                        Product = Mapper.Map<mProductDTO>(p),
                        Quantity = item.Quantity,

                    };

                    if (!Cart.Exists(x => x.Product.Id == cartItem.Product.Id))
                    {
                        Cart.Add(cartItem);
                    }
                }
            }

            return Cart;
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
