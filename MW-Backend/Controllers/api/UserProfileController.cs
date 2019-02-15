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
using MW_Backend.DTOs;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace MW_Backend.Controllers.api
{
    public class UserProfileController : ApiController
    {
        private ApplicationDbContext db;

        public UserProfileController()
        {
            db = new ApplicationDbContext();
        }

        // GET: api/UserIdentity
        [Authorize]
        [HttpGet]
        [Route("api/UserIdentity")]
        public IHttpActionResult GetUserProfile()
        {
            string id = User.Identity.GetUserId();
            var model = db.Users_Profiles
                        .FirstOrDefault(x => x.ApplicationUserId == id);

            return Ok(Mapper.Map<UserProfileDTO>(model));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserProfileExists(int id)
        {
            return db.Users_Profiles.Count(e => e.Id == id) > 0;
        }
    }
}
