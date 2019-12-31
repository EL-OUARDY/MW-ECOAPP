using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.DTO_Resourses
{
    public class SubCategoryDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int CategoryId { get; set; }
    }
}