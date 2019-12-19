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
using AutoMapper;
using MW_Backend.DTO_Resourses;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Areas.Admin.Controllers
{
    [Authorize(Roles = "ADMIN")]
    public class ProductVariantsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/ProductVariants/5
        [HttpGet]
        [Route("api/ProductVariants/{productId}")]
        public async Task<IHttpActionResult> GetProductVariants(int productId)
        {
            Product product = await db.Products.Include("Variants")
                        .Where(x => x.Id == productId)
                        .SingleOrDefaultAsync();

            var model = Mapper.Map<ProductVariantsVM>(product);
            return Ok(model);
        }

        // PUT: api/ProductVariants/5
        public async Task<IHttpActionResult> PutVariants(int id, VariantResource variantResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != variantResource.Id)
            {
                return BadRequest();
            }

            var variant = Mapper.Map<VariantResource, Variant>(variantResource);
            db.Entry(variant).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VariantsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        // POST: api/ProductVariants
        public async Task<IHttpActionResult> PostVariants(VariantResource variantResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var variant = Mapper.Map<VariantResource, Variant>(variantResource);
            db.Variants.Add(variant);
            await db.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/ProductVariants/5
        public async Task<IHttpActionResult> DeleteVariants(int id)
        {
            Variant variants = await db.Variants.FindAsync(id);
            if (variants == null)
            {
                return NotFound();
            }

            db.Variants.Remove(variants);
            await db.SaveChangesAsync();

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

        private bool VariantsExists(int id)
        {
            return db.Variants.Count(e => e.Id == id) > 0;
        }
    }
}