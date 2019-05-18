using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.Areas.Admin.ViewModel
{
    public class UsersListVM
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public bool EmailConfirmed { get; set; }

        public string FullName { get; set; }

        public string Gender { get; set; }

        public string Phone { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public DateTime Date_Registred { get; set; }

        public DateTime Last_Signed { get; set; }

        public string Avatar //profile image
        {
            get
            {
                return "rockstar.jpg";
            }
        }
    }
}