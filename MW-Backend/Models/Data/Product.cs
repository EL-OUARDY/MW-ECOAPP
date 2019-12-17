﻿using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models.Data
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(60)]
        public string Slug { get; set; }

        [Required]
        public decimal Price { get; set; }

        public string Color { get; set; } // main color ..

        [Required]
        public bool OnSale { get; set; } = true; // false => 'out of stock'

        public int? Quantity { get; set; } // 0 => 'out of stock'

        [Required]
        public string ShippingMethod { get; set; }

        [Required]
        public string Description { get; set; }

        public string Source { get; set; }

        public DateTimeOffset? Last_Update { get; set; } = DateTimeOffset.Now.ToUniversalTime();

        public decimal? OldPrice { get; set; }

        [Range(0, 100)]
        public byte Discount { get; set; } = 0; // its a % , by default : 0

        public virtual SubCategory SubCategory { get; set; }

        public int SubCategoryId { get; set; }

        public string CouponLibel { get; set; }

        public bool Deleted { get; set; } = false;

        public ICollection<Variants> Variants { get; set; }

        public Product()
        {
            Variants = new Collection<Variants>();
        }
    }
}