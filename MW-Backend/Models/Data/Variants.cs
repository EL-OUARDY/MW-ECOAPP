using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models.Data
{
    public class Variants
    {
        public int Id { get; set; }

        [Required]
        public string Label { get; set; }

        [Required]
        public string Value { get; set; }

        public decimal Price_Diff { get; set; } = 0; // ZERO means variant doesn't affect the price

        public string Image { get; set; }

        public DateTimeOffset? Last_Update { get; set; } = DateTimeOffset.Now.ToUniversalTime();

        public Product Product { get; set; }
        public int ProductId { get; set; }
    }
}