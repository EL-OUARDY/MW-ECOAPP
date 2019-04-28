using Microsoft.AspNet.Identity;
using MW_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MW_Backend.Areas.Admin.Controllers
{
    public class UsersController : ApiController
    {
        private ApplicationDbContext db;

        public UsersController()
        {
            db = new ApplicationDbContext();
        }

        public IHttpActionResult GetUsers()
        {
            var model = db.Users_Profiles.ToList();
            return Ok(model);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(string id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}
