﻿using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.DTO_Resourses
{
    public class CategoryDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Sorting { get; set; }

        public string Svg { get; set; }

        public virtual ICollection<SubCategoryDTO> SubCategories { get; set; }
    }
}