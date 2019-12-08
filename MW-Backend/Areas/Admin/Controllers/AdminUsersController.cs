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
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Query;
using MW_Backend.Areas.Admin.ViewModel;
using MW_Backend.Models;

namespace MW_Backend.Areas.Admin.Controllers
{
    [Authorize(Roles = "ADMIN")]
    public class AdminUsersController : ApiController
    {
        private ApplicationDbContext db;

        public AdminUsersController()
        {
            db = new ApplicationDbContext();
        }

        // GET: api/AdminUsers
        [HttpGet]
        public async Task<PageResult<UsersListVM>> GetAdminUsers(ODataQueryOptions<UsersListVM> options)
        {
            var users = await db.Users.ToListAsync();
            var model = users.Select(Mapper.Map<ApplicationUser, UsersListVM>);

            IQueryable results = options.ApplyTo(model.AsQueryable());
            return new PageResult<UsersListVM>(
                                results as IEnumerable<UsersListVM>, null,
                                Request.ODataProperties().TotalCount);
        }

        //[HttpGet]
        //public async Task<IHttpActionResult> GetAdminUsers()
        //{
        //    var users = await db.Users.ToListAsync();
        //    var model = users.Select(Mapper.Map<ApplicationUser, UsersListVM>);

        //    return Ok(model);
        //}


        //// GET: api/AdminUsers/5
        //[ResponseType(typeof(ApplicationUser))]
        //public async Task<IHttpActionResult> GetApplicationUser(string id)
        //{
        //    ApplicationUser applicationUser = await db.ApplicationUsers.FindAsync(id);
        //    if (applicationUser == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(applicationUser);
        //}

        //// DELETE: api/AdminUsers/5
        //[ResponseType(typeof(ApplicationUser))]
        //public async Task<IHttpActionResult> DeleteApplicationUser(string id)
        //{
        //    ApplicationUser applicationUser = await db.ApplicationUsers.FindAsync(id);
        //    if (applicationUser == null)
        //    {
        //        return NotFound();
        //    }

        //    db.ApplicationUsers.Remove(applicationUser);
        //    await db.SaveChangesAsync();

        //    return Ok(applicationUser);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool UserExists(string id)
        //{
        //    return db.ApplicationUsers.Count(e => e.Id == id) > 0;
        //}
    }
}