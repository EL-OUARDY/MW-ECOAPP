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
    public class AdminCategoriesController : ApiController
    {
        // NOTE: This controller deals with both categories and subcategories

        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/AdminCategories
        public IHttpActionResult GetCategories() // used to fill category control
        {
            var _categories = db.Categories.ToList()
                    .Select(Mapper.Map<Category, CategoryDTO>);

            return Ok(_categories);
        }

        // GET: api/AdminCategoriesList
        [HttpGet]
        [Route("api/AdminCategoriesList")]
        public IHttpActionResult GetCategoriesList()
        {
            var _categories = db.Categories.ToList()
                    .OrderBy(x => x.Sorting)
                    .Select(Mapper.Map<Category, CategoryListDTO>);

            return Ok(_categories);
        }

        // GET: api/AdminCategories/5
        [ResponseType(typeof(CategoryListDTO))]
        public async Task<IHttpActionResult> GetCategory(int id)
        {
            Category category = await db.Categories.FindAsync(id);
            if (category == null)
                return NotFound();

            return Ok(Mapper.Map<Category, CategoryListDTO>(category));
        }
        
        // POST: api/AdminCategories
        public async Task<IHttpActionResult> PostCategory(CategoryRessource NewCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("ModelState is not valid");

            if (CategoryExists(NewCategory.Name))
                return BadRequest("Category Already Exists !");


            db.Categories.Add(Mapper.Map<Category>(NewCategory));
            await db.SaveChangesAsync();

            return Ok();
        }

        // POST: api/AdminSubCategories
        [HttpPost]
        [Route("api/AdminSubCategories")]
        public async Task<IHttpActionResult> PostSubCategory(SubCategoryRessource NewSubCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("ModelState is not valid");

            if (!CategoryExists(NewSubCategory.CategoryId))
                return NotFound();

            if (SubCategoryExists(NewSubCategory.Name))
                return BadRequest("Category Already Exists !");

            var model = Mapper.Map<SubCategory>(NewSubCategory);
            model.CategoryId = NewSubCategory.CategoryId;

            db.Sub_Categories.Add(model);
            await db.SaveChangesAsync();

            return Ok();
        }

        // PUT: api/AdminCategories/5
        public async Task<IHttpActionResult> PutCategory(int id, CategoryRessource category)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (CategoryExists(category.Name))
                return BadRequest("a category has the same name !");

            var _cat = await db.Categories.SingleOrDefaultAsync(x => x.Id == id);
            _cat = Mapper.Map<Category>(category);

            db.Entry(_cat).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(category.Name))
                    return NotFound();
                else
                    return BadRequest("Cant update Category - unknown reason");
            }

            return Ok();
        }

        // PUT: api/AdminSubCategories/5
        [HttpPut]
        [Route("api/AdminSubCategories/{id}")]
        public async Task<IHttpActionResult> PutSubCategory(int id, SubCategoryRessource subcat)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (SubCategoryExists(subcat.Name))
                return BadRequest("a subcategory has the same name !");

            var _cat = await db.Sub_Categories.SingleOrDefaultAsync(x => x.Id == id);
            _cat = Mapper.Map<SubCategory>(subcat);

            db.Entry(_cat).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubCategoryExists(subcat.Name))
                    return NotFound();
                else
                    return BadRequest("Cant update Category - unknown reason");
            }

            return Ok();
        }


        // DELETE: api/AdminCategories/5
        public async Task<IHttpActionResult> DeleteCategory(int id)
        {
            Category category = await db.Categories.FindAsync(id);
            if (category == null)
                return NotFound();

            db.Categories.Remove(category);
            await db.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/AdminSubCategories/5
        [HttpDelete]
        [Route("api/AdminSubCategories/{id}")]
        public async Task<IHttpActionResult> DeleteSubCategory(int id)
        {
            SubCategory subcategory = await db.Sub_Categories.FindAsync(id);
            if (subcategory == null)
                return NotFound();

            db.Sub_Categories.Remove(subcategory);
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

        private bool CategoryExists(int id)
        {
            return db.Categories.Count(e => e.Id == id) > 0;
        }

        private bool CategoryExists(string name)
        {
            return db.Categories.Count(e => e.Name == name) > 0;
        }

        private bool SubCategoryExists(string name)
        {
            return db.Sub_Categories.Count(e => e.Name == name) > 0;
        }
    }
}