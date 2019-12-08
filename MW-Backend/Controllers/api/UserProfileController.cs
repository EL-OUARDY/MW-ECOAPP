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
    [Authorize]
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
        [HttpGet]
        [Route("api/authenticate")]
        public IHttpActionResult Authenticate()
        {
            string userId = User.Identity.GetUserId();
            var _user = UserManager.FindById(userId);
            var roles = UserManager.GetRoles(userId);

            IDictionary<string, string> response = new Dictionary<string, string>
            {
                { "profile", System.Web.Helpers.Json.Encode(Mapper.Map<UserProfileResourse>(_user)) }
            };

            if (roles.Contains("ADMIN"))
                response.Add("role", "ADMIN");


            _user.Last_Visite = DateTimeOffset.Now.ToUniversalTime();
            db.SaveChanges();

            return Ok(response);
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
