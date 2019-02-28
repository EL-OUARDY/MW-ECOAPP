using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models.Data
{
    public class Product_Variations
    {
        public int Id { get; set; }

        [Required]
        public string Label { get; set; }

        [Required]
        public string Value { get; set; }

        [Required]
        public bool HasImage { get; set; }

        public Product Product { get; set; }
        public int ProductId { get; set; }
    }
}