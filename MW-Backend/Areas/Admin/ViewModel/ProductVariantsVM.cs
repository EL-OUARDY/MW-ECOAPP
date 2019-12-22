using MW_Backend.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.DTO_Resourses
{
    public class ProductVariantsVM
    {
        [Required]
        public int Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public int? Quantity { get; set; }

        public string Color { get; set; }

        public ICollection<VariantDTO> Variants { get; set; }

        public string Image
        {
            get
            {
                var _dir = new Product_Dir(Id);
                return _dir.GetMainImage();
            }
        }

        public DateTimeOffset? Last_Update { get; set; } = DateTimeOffset.Now.ToUniversalTime();

    }
}