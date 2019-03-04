﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace MW_Backend.Helpers
{
    public class DirectoryHelper
    {
        public static bool SaveProductImages(HttpFileCollection files, int ProductId)
        {
            try
            {
                var MainImg = files["MainImg"];

                var GalleryImgs = files.GetMultiple("GalleryImgs");

                var DescImgs = files.GetMultiple("DescImgs");

                // Main Image
                string Path1 = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + ProductId.ToString() + "/Main");

                if (!Directory.Exists(Path1))
                    Directory.CreateDirectory(Path1);

                MainImg.SaveAs(Path1 + "/" + MainImg.FileName);

                // Gallery Images
                string Path2 = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + ProductId.ToString() + "/Gallery");
                if (!Directory.Exists(Path2))
                    Directory.CreateDirectory(Path2);

                foreach (var item in GalleryImgs)
                {
                    item.SaveAs(Path2 + "/" + item.FileName);
                }

                // Gallery Images
                string Path3 = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + ProductId.ToString() + "/Desc");
                if (!Directory.Exists(Path3))
                    Directory.CreateDirectory(Path3);

                foreach (var item in DescImgs)
                {
                    item.SaveAs(Path3 + "/" + item.FileName);
                }

            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }
    }
}