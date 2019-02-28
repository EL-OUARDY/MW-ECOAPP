using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.AspNet.Identity;
using MW_Backend.Helpers;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Controllers.api
{
    public class OrdersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // POST: api/Orders
        public IHttpActionResult PostOrder(CartItem[] PostedCart)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // get the valid cart
            var cart = CartHelper.getValidCart(PostedCart);

            if (cart.Count == 0)
            {
                return Conflict(); // handle it on client side
            }

            // create an order object
            var order = new Order
            {
                Date_Placed = DateTime.Now,
                Status = "pending", // avoid magic strings
                Payment = "paypal",
                GrandTotal = CartHelper.getGrandTotal(cart),
                ApplicationUserId = User.Identity.GetUserId()
            };
            
            db.Orders.Add(order);

            // loop to the cart and add each item to the Order_Items

            Order_Item orderItem;
            foreach (var item in cart)
            {
                orderItem = new Order_Item
                {
                    Quantity = Convert.ToByte(item.Quantity),
                    Status = "pending",
                    Shipping = "free",
                    OrderId = order.Id,
                    ProductId = item.Product.Id
                };

                db.Order_Items.Add(orderItem);
            }

            db.SaveChanges();
            return Ok(order.Id);

        }

        // GET: api/Orders
        public IQueryable<Order> GetOrders()
        {
            return db.Orders;
        }

        // GET: api/Orders/5
        [ResponseType(typeof(Order))]
        public IHttpActionResult GetOrder(int id)
        {
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        // PUT: api/Orders/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOrder(int id, Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.Id)
            {
                return BadRequest();
            }

            db.Entry(order).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
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
        
        // DELETE: api/Orders/5
        [ResponseType(typeof(Order))]
        public IHttpActionResult DeleteOrder(int id)
        {
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            db.Orders.Remove(order);
            db.SaveChanges();

            return Ok(order);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrderExists(int id)
        {
            return db.Orders.Count(e => e.Id == id) > 0;
        }
    }
}