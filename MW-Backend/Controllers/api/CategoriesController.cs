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
using AutoMapper;
using MW_Backend.DTO_Resourses;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Controllers.api
{
    public class CategoriesController : ApiController
    {
        private ApplicationDbContext db;

        public CategoriesController()
        {
            db = new ApplicationDbContext();
        }

        // GET: api/Categories
        public IHttpActionResult GetCategories()
        {
            var _categories = db.Categories.ToList()
                    .Select(Mapper.Map<Category, CategoryDTO>);

            return Ok(_categories);
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
    }
}