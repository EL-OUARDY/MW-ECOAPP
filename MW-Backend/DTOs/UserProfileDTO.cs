﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.DTOs
{
    public class UserProfileDTO
    {
        public string FullName { get; set; }

        public string Gender { get; set; }

        public string Phone { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string Avatar //image
        {
            get
            {
                return "rockstar.jpg";
            }
        }
    }
}