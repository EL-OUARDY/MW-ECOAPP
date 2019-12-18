using MW_Backend.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Web;


namespace MW_Backend.DTO_Resourses
{
    public class mProductDTO
    {
        [Required]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Slug { get; set; }

        public decimal Price { get; set; }

        public string Color { get; set; }

        public string Image
        {
            get
            {
                var _dir = new Product_Dir(Id);
                return _dir.GetMainImage();
            }

        }
    }
}