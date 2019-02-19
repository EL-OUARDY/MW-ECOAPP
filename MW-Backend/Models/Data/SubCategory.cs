using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models.Data
{
    public class SubCategory
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        [Display(Name = "Category")]
        public string Name { get; set; }

        public Category Category { get; set; }

        [Required]
        public int CategoryId { get; set; }

    }
}