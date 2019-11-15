using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.DTO_Resourses
{
    public class UserProfileResourse
    {
        public string Email { get; set; }

        public string FullName { get; set; }

        public string Gender { get; set; }

        public string Phone { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string Avatar { get; set; } = "rockstar.jpg";

    }
}