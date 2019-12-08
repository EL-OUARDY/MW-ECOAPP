using MW_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.Areas.Admin.Helpers
{
    public class UserHelper
    {
        private ApplicationDbContext db;
        private string Id;

        public UserHelper(string Id)
        {
            this.Id = Id;
            db = new ApplicationDbContext();
        }

        internal bool IsOnline()
        {
            return db.Connections.Count(e => e.ConnectionId == Id) > 0;
        }

        internal int TotalOrders()
        {
            return 0;
        }

        internal int TotalPoints()
        {
            return 0;
        }

        internal int TotalReviews()
        {
            return 0;
        }

        internal int SignUpWith()
        {
            return 0;
        }
    }
}