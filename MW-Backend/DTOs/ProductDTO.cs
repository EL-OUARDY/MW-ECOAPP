using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.IO;
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

        //Handling Exceptions !!
        public string mainImg
        {
            get
            {
                string myPath = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + Id.ToString() + "/Main");
                return Directory.EnumerateFiles(myPath).Select(x => Path.GetFileName(x)).FirstOrDefault();
            }
        }

        public IEnumerable<string> galleryImgs
        {
            get
            {
                string myPath = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + Id.ToString() + "/Gallery");
                return Directory.EnumerateFiles(myPath).Select(fn => Path.GetFileName(fn));
            }
        }

        public IEnumerable<string> descImgs
        {
            get
            {
                string myPath = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + Id.ToString() + "/Desc");
                return Directory.EnumerateFiles(myPath).Select(fn => Path.GetFileName(fn));
            }

        }

    }
}