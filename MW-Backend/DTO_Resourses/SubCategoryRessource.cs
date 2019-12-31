﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.DTO_Resourses
{
    public class SubCategoryRessource
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Svg { get; set; }

        [Required]
        public int CategoryId { get; set; }

        public int Sorting { get; set; } = 999; // default if sorting isn't provided
    }
}