using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using MW_Backend.DTO_Resourses;
using MW_Backend.Helpers;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Areas.Admin.Controllers
{
    [Authorize(Roles = "ADMIN")]
    [RoutePrefix("api/ProductVariants")]
    public class ProductVariantsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/ProductVariants/5
        [HttpGet]
        [Route("{productId}")]
        public async Task<IHttpActionResult> GetProductVariants(int productId)
        {
            Product product = await db.Products.Include("Variants")
                        .Where(x => x.Id == productId)
                        .SingleOrDefaultAsync();


            var model = Mapper.Map<ProductVariantsVM>(product);
            model.Variants = model.Variants.OrderBy(x => x.Label).ToList();

            return Ok(model);
        }

        // POST: api/ProductVariants
        [HttpPost]
        public async Task<IHttpActionResult> PostVariants()
        {
            var _Request = HttpContext.Current.Request;

            var variantResource = new VariantResource
            {
                Label = _Request["Label"],
                Value = _Request["Value"],
                ProductId = int.Parse(_Request["ProductId"]),
            };

            if (_Request["Price_Diff"] != null)
                variantResource.Price_Diff = decimal.Parse(_Request["Price_Diff"]);

            if (_Request["Quantity"] != null)
                variantResource.Quantity = int.Parse(_Request["Quantity"]);


            var variant = Mapper.Map<VariantResource, Variant>(variantResource);
            db.Variants.Add(variant);
            await db.SaveChangesAsync();

            var Image = _Request.Files["Image"];

            if (Image != null)
            {
                var _dir = new Product_Dir(variant.ProductId);
                var task = Task.Run(() => _dir.AddVariantImage(Image, variant.Id));

                if (!await task)
                    return BadRequest("A Problem Has Occured While Uploading Variant Image !!");
            }

            return Ok(Mapper.Map<VariantDTO>(variant));
        }

        // PUT: api/ProductVariants/5
        [HttpPut]
        [Route("{id}")]
        public async Task<IHttpActionResult> PutVariants(int id)
        {
            var _Request = HttpContext.Current.Request;

            var variantResource = new VariantResource
            {
                Label = _Request["Label"],
                Value = _Request["Value"],
                ProductId = int.Parse(_Request["ProductId"]),
            };

            if (_Request["Id"] != null)
                variantResource.Id = int.Parse(_Request["Id"]);

            if (_Request["Price_Diff"] != null)
                variantResource.Price_Diff = decimal.Parse(_Request["Price_Diff"]);

            if (_Request["Quantity"] != null)
                variantResource.Quantity = int.Parse(_Request["Quantity"]);

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
                    return BadRequest("Unknown Error !!");
                }
            }

            var Image = _Request.Files["Image"];

            if (Image != null)
            {
                var _dir = new Product_Dir(variant.ProductId);
                var task = Task.Run(() => _dir.UpdateVariantImage(Image, variant.Id));

                if (!await task)
                    return BadRequest("A Problem Has Occured While Uploading Variant Image !!");
            }

            return Ok(Mapper.Map<VariantDTO>(variant));
        }


        // DELETE: api/ProductVariants/5
        [HttpDelete]
        [Route("{id}")]
        public async Task<IHttpActionResult> DeleteVariants(int id)
        {
            Variant variant = await db.Variants.FindAsync(id);
            if (variant == null)
            {
                return NotFound();
            }

            db.Variants.Remove(variant);
            await db.SaveChangesAsync();

            // Remove Variant Images Directory
            var _dir = new Product_Dir(variant.ProductId);
            var task = Task.Run(() => !_dir.DeleteVariantImage(variant.Id));

            if (await task)
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

        private bool VariantsExists(int id)
        {
            return db.Variants.Count(e => e.Id == id) > 0;
        }
    }
}