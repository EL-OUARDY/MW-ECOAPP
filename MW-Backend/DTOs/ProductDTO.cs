using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.DTOs
{
    public class ProductDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Slug { get; set; }

        public decimal Price { get; set; }

        public string Color { get; set; }

        public string Size { get; set; }

        public string Description { get; set; }

        public decimal? OldPrice { get; set; }

        public byte Discount { get; set; }

    }
}