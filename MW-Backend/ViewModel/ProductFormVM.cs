using MW_Backend.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MW_Backend.ViewModel
{
    public class ProductFormVM
    {
        public ProductDTO Product { get; set; }
        public HttpPostedFileBase MainImg { get; set; }

        //public HttpPostedFileBase[] GalleryImgs { get; set; }
        //public HttpPostedFileBase[] DescImgs { get; set; }
    }
}