using MW_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.DTO_Resourses
{
    public class SubCategoryListDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int CategoryId { get; set; }

        public int Sorting { get; set; }

        public string Svg { get; set; }

        public int ProductsCount
        {
            get
            {
                using (var db = new ApplicationDbContext())
                {
                    return db.Products.Where(x => x.SubCategoryId == this.Id && !x.Deleted).Count();
                }
            }

        }
    }
}