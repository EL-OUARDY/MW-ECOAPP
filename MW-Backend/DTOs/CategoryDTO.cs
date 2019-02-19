using MW_Backend.Models;
using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.DTOs
{
    public class CategoryDTO
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public string Name { get; set; }

        public IEnumerable<SubCategory> SubCategories
        {
            get
            {
                using (var db = new ApplicationDbContext())
                {
                    return db.Sub_Categories.Where(x => x.CategoryId == Id).ToList();
                }
            }

            set { this.SubCategories = value; }

        }
    }
}