using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Web;
using MW_Backend.Helpers;


namespace MW_Backend.DTOs
{
    public class ProductDTO
    {
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        public string Slug { get; set; }

        [Required]
        public decimal Price { get; set; }

        public string Color { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public bool OnSale { get; set; }

        public int? Quantity { get; set; }

        public decimal? OldPrice { get; set; }

        [Required]
        public string ShippingMethod { get; set; }

        public byte Discount { get; set; } 

        [Required]
        public int SubCategoryId { get; set; }


        public int CategoryId { get; set; } //

        //Handling Exceptions !!
        public string mainImg
        {
            get
            {
                var _dir = new Product_Dir(Id);
                return _dir.GetMainImage();
            }
        }

        public IEnumerable<string> galleryImgs
        {
            get
            {
                var _dir = new Product_Dir(Id);
                return _dir.GetGalleryImages();
            }
}

        public IEnumerable<string> descImgs
        {
            get
            {
                var _dir = new Product_Dir(Id);
                return _dir.GetDescImages();
            }
        }

    }
}