using MW_Backend.Models;
using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.DTO_Resourses
{
    public class CategoryListDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Sorting { get; set; }

        public string Svg { get; set; }

        public virtual ICollection<SubCategoryListDTO> SubCategories { get; set; }

        public int ProductsCount
        {
            get
            {
                using (var db = new ApplicationDbContext())
                {
                    return db.Products.Where(x => x.SubCategory.CategoryId == this.Id && !x.Deleted).Count();
                }
            }

        }
    }
}