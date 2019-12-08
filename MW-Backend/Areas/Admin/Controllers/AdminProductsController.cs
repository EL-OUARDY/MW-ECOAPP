using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Query;
using Microsoft.AspNet.OData.Extensions;
using AutoMapper;
using MW_Backend.Areas.Admin.ViewModel;
using MW_Backend.DTO_Resourses;
using MW_Backend.Helpers;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Areas.Admin.Controllers
{
    [Authorize(Roles = "ADMIN")]
    public class AdminProductsController : ApiController
    {
        private ApplicationDbContext db;

        public AdminProductsController()
        {
            db = new ApplicationDbContext();
        }

        // GET: api/AdminProducts
        [HttpGet]
        public async Task<PageResult<ProductListVM>> GetAdminProducts(ODataQueryOptions<ProductListVM> options)
        {
            var products = await db.Products.ToListAsync();
            var model = products.Select(Mapper.Map<Product, ProductListVM>);

            IQueryable results = options.ApplyTo(model.AsQueryable());
            return new PageResult<ProductListVM>(
                                results as IEnumerable<ProductListVM>, null,
                                Request.ODataProperties().TotalCount);
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
        [Route("api/UpdateProduct/{id}")]
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
            product.Last_Update = DateTimeOffset.Now.ToUniversalTime();
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
        public async Task<IHttpActionResult> DeleteAdminProduct(int id)
        {
            Product product = await db.Products.FindAsync(id);
            if (product == null)
                return NotFound();

            try
            {
                db.Products.Remove(product);
                await db.SaveChangesAsync();
            }
            catch (Exception)
            {
                return BadRequest("Can't Remove this product - Unknown reason !");
            }

            // Remove Images Directory
            var _dir = new Product_Dir(id);
            var task = Task.Run(() => !_dir.DeleteProductImages());

            if (await task)
            {
                return BadRequest("An error was occured while deleting images directory !");
            }

            return Ok();
        }

        // Post: api/AdminProducts/5
        [HttpPost]
        [Route("api/DeleteRange")]
        public async Task<IHttpActionResult> DeleteRange(int[] ids)
        {
            var products = await db.Products.Where(x => ids.Contains(x.Id)).ToListAsync();

            try
            {
                db.Products.RemoveRange(products);
                await db.SaveChangesAsync();
            }
            catch (Exception)
            {
                return BadRequest("Cannot delete Products ..");
            }

            // Remove Images Directory
            bool isOK = true;
            foreach (var id in ids)
            {
                var _dir = new Product_Dir(id);
                var task = Task.Run(() => !_dir.DeleteProductImages());

                if (await task)
                    isOK = false;
            }
            if (!isOK)
                return BadRequest("can't remove all products images ");

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