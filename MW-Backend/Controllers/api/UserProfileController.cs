using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using MW_Backend.DTO_Resourses;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Controllers.api
{
    public class UserProfileController : ApiController
    {
        private ApplicationDbContext db;
        private UserManager<ApplicationUser> UserManager { get; set; }

        public UserProfileController()
        {
            db = new ApplicationDbContext();
            UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));
        }

        // GET: api/UserIdentity
        [Authorize]
        [HttpGet]
        [Route("api/authenticate")]
        public IHttpActionResult GetUserProfile()
        {
            var _user = UserManager.FindById(User.Identity.GetUserId());
            return Ok(Mapper.Map<UserProfileResourse>(_user));
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
