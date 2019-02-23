using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Controllers.api
{
    public class LookAtAsynController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/LookAtAsyn
        public IQueryable<Coupon> GetCoupons()
        {
            return db.Coupons;
        }

        // GET: api/LookAtAsyn/5
        [ResponseType(typeof(Coupon))]
        public async Task<IHttpActionResult> GetCoupon(string id)
        {
            Coupon coupon = await db.Coupons.FindAsync(id);
            if (coupon == null)
            {
                return NotFound();
            }

            return Ok(coupon);
        }

        // PUT: api/LookAtAsyn/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCoupon(string id, Coupon coupon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != coupon.Libel)
            {
                return BadRequest();
            }

            db.Entry(coupon).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CouponExists(id))
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

        // POST: api/LookAtAsyn
        [ResponseType(typeof(Coupon))]
        public async Task<IHttpActionResult> PostCoupon(Coupon coupon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Coupons.Add(coupon);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CouponExists(coupon.Libel))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = coupon.Libel }, coupon);
        }

        // DELETE: api/LookAtAsyn/5
        [ResponseType(typeof(Coupon))]
        public async Task<IHttpActionResult> DeleteCoupon(string id)
        {
            Coupon coupon = await db.Coupons.FindAsync(id);
            if (coupon == null)
            {
                return NotFound();
            }

            db.Coupons.Remove(coupon);
            await db.SaveChangesAsync();

            return Ok(coupon);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CouponExists(string id)
        {
            return db.Coupons.Count(e => e.Libel == id) > 0;
        }
    }
}