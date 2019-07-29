using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace MW_Backend.Helpers
{
    public class DirectoryHelper
    {
        // Everything here should be async

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

                // Description Images
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

        public static string getMainImage(int Id)
        {
            string myPath = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + Id.ToString() + "/Main");
            return Directory.EnumerateFiles(myPath).Select(x => Path.GetFileName(x)).FirstOrDefault();
        }

        public static IEnumerable<string> getGalleryImages(int Id)
        {
            string myPath = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + Id.ToString() + "/Gallery");
            return Directory.EnumerateFiles(myPath).Select(fn => Path.GetFileName(fn));
        }

        public static IEnumerable<string> getDescImages(int Id)
        {
            string myPath = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + Id.ToString() + "/Desc");
            return Directory.EnumerateFiles(myPath).Select(fn => Path.GetFileName(fn));
        }

        public static bool deleteProductImages(int id)
        {
            string dir = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + id.ToString() );

            try
            {
                if (Directory.Exists(dir))
                    Directory.Delete(dir, true);
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }

        public static bool ReplaceMainImg(int id, string filename)
        {
            string dir = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + id.ToString());

            // delete old main image
            try
            {
                if (Directory.Exists(dir + "/Main"))
                    Directory.Delete(dir + "/Main", true);
            }
            catch (Exception)
            {
                return false;
            }

            // take given image from gallery and make it the main img
            var gFile = Directory.EnumerateFiles(dir + "/Gallery")
                         .FirstOrDefault(x => Path.GetFileName(x) == filename);
            try
            {
                if ( gFile != null )
                {
                    Directory.CreateDirectory(dir + "/Main");
                    File.Copy(gFile, dir + "/Main/" + filename, true);
                }
                else
                {
                    return false;
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