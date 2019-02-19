using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Web;

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

        [Required]
        public string Color { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Status { get; set; }

        public string Size { get; set; }

        public decimal? OldPrice { get; set; }

        public byte Discount { get; set; }

        [Required]
        public int SubCategoryId { get; set; }

        //Handling Exceptions !!
        public string mainImg
        {
            get
            {
                try
                {
                    string myPath = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + Id.ToString() + "/Main");
                    return Directory.EnumerateFiles(myPath).Select(x => Path.GetFileName(x)).FirstOrDefault();
                }
                catch (Exception)
                {
                    return null;
                }
                
            }
        }

        public IEnumerable<string> galleryImgs
        {
            get
            {
                try
                {
                    string myPath = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + Id.ToString() + "/Gallery");
                    return Directory.EnumerateFiles(myPath).Select(fn => Path.GetFileName(fn));
                }
                catch (Exception)
                {
                    return null;
                }
                
            }
}

        public IEnumerable<string> descImgs
        {
            get
            {
                try
                {
                    string myPath = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + Id.ToString() + "/Desc");
                    return Directory.EnumerateFiles(myPath).Select(fn => Path.GetFileName(fn));
                }
                catch (Exception)
                {
                    return null;
                }
                
            }
        }

    }
}