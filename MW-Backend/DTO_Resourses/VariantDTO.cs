using MW_Backend.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.DTO_Resourses
{
    public class VariantDTO
    {
        public int Id { get; set; }

        [Required]
        public string Label { get; set; }

        [Required]
        public string Value { get; set; }

        public decimal Price_Diff { get; set; }

        public int? Quantity { get; set; }

        public DateTimeOffset? Last_Update { get; set; } = DateTimeOffset.Now.ToUniversalTime();

        public int ProductId { get; set; }

        public string Image
        {
            get
            {
                var _dir = new Product_Dir(ProductId);
                return _dir.GetVariantImage(Id);
            }
        }
    }
}