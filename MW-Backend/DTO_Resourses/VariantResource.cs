using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.DTO_Resourses
{
    public class VariantResource
    {
        public int Id { get; set; }

        [Required]
        public string Label { get; set; }

        [Required]
        public string Value { get; set; }

        public decimal Price_Diff { get; set; } = 0;

        public int? Quantity { get; set; }

        public string Image { get; set; }

        public DateTimeOffset? Last_Update { get; set; } = DateTimeOffset.Now.ToUniversalTime();

    }
}