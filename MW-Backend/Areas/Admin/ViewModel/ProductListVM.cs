using MW_Backend.Helpers;
using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.Areas.Admin.ViewModel
{
    public class ProductListVM
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Slug { get; set; }

        public decimal Price { get; set; }

        public string Color { get; set; } 

        public bool OnSale { get; set; } = true; 

        public int? Quantity { get; set; } 

        public string ShippingMethod { get; set; }

        //public string Description { get; set; }

        public DateTimeOffset? Last_Update { get; set; }

        public decimal? OldPrice { get; set; }

        public byte Discount { get; set; } = 0;

        public int SubCategoryId { get; set; }

        public int? CategoryId { get; set; }

        public string CouponLibel { get; set; }

        public bool Deleted { get; set; }

        public string mainImg
        {
            get
            {
                var _dir = new Product_Dir(Id);
                return _dir.GetMainImage();
            }
        }
    }
}