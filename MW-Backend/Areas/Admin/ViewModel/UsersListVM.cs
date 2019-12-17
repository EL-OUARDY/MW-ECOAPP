using MW_Backend.Areas.Admin.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.Areas.Admin.ViewModel
{
    public class UsersListVM
    {
        public string Id { get; set; }

        public string Email { get; set; }

        public string FullName { get; set; }

        public string Gender { get; set; }

        public string Phone { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public bool EmailConfirmed { get; set; }

        public string Avatar { get; set; }

        public DateTimeOffset Registration_Date { get; set; }

        public DateTimeOffset Last_Visite { get; set; }

        public string UserAgent { get; set; }

        //public string HaveBeenUserFor
        //{
        //    get
        //    {
        //        var diff = DateTimeOffset.Now.ToUniversalTime() - Registration_Date;
        //        return diff.TotalSeconds.ToString();
        //    }
        //}

        public string Status
        {
            get
            {
                var userHelper = new UserHelper(this.Id);
                return userHelper.IsOnline() ? "online" : "offline";
            }
        }

        public int Orders
        {
            get
            {
                var userHelper = new UserHelper(this.Id);
                return userHelper.TotalOrders();
            }
        }

        public int Points
        {
            get
            {
                var userHelper = new UserHelper(this.Id);
                return userHelper.TotalPoints();
            }
        }

        public int Reviews
        {
            get
            {
                var userHelper = new UserHelper(this.Id);
                return userHelper.TotalReviews();
            }
        }

        public string SignUpWith
        {
            get
            {
                var userHelper = new UserHelper(this.Id);
                return userHelper.SignUpWith();
            }
        }

    }
}