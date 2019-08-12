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

        public static bool SaveProductImages(int productId, HttpFileCollection files, string[] galleryImgsDrop, string[] descImgsDrop, int copyingId)
        {
            try
            {
                // Directories
                string parent_dir = "~/Content/Images/Products/" + productId.ToString();
                string mainImgPath = HttpContext.Current.Server.MapPath(parent_dir + "/Main");
                string galleryPath = HttpContext.Current.Server.MapPath(parent_dir + "/Gallery");
                string descPath = HttpContext.Current.Server.MapPath(parent_dir + "/Desc");

                string copying_dir = "~/Content/Images/Products/" + copyingId.ToString();

                var MainImg = files["MainImg"];

                var GalleryImgs = files.GetMultiple("GalleryImgs");

                var DescImgs = files.GetMultiple("DescImgs");


                // Get all images from the copied product
                if (copyingId > 0)
                {
                    // main
                    if (MainImg == null)
                    {
                        var mi = Directory.EnumerateFiles(copying_dir + "/Main").Select(x => Path.GetFileName(x)).FirstOrDefault();
                        File.Copy(mi, mainImgPath + "/" + mi, true);
                    }

                    // gallery
                    // desc
                }
                ///

                // Main Image
                if (MainImg != null)
                {
                    if (Directory.Exists(mainImgPath))
                    {
                        Directory.Delete(mainImgPath, true); // delete old images if exist
                        Directory.CreateDirectory(mainImgPath);
                    }
                    else
                    {
                        Directory.CreateDirectory(mainImgPath);
                    }

                    MainImg.SaveAs(mainImgPath + "/" + MainImg.FileName);
                }

                // Drop Gallery Images
                if (galleryImgsDrop.Length > 0)
                {
                    foreach (var item in galleryImgsDrop)
                    {
                        if (File.Exists(galleryPath + "/" + item))
                        {
                            File.Delete(galleryPath + "/" + item);
                        }
                    }
                }

                // Drop Description Images
                if (descImgsDrop.Length > 0)
                {
                    foreach (var item in descImgsDrop)
                    {
                        if (File.Exists(descPath + "/" + item))
                        {
                            File.Delete(descPath + "/" + item);
                        }
                    }
                }

                // Save Gallery Images
                if (!Directory.Exists(galleryPath))
                    Directory.CreateDirectory(galleryPath);

                foreach (var item in GalleryImgs)
                {
                    item.SaveAs(galleryPath + "/" + item.FileName);
                }

                // Save Description Images
                if (!Directory.Exists(descPath))
                    Directory.CreateDirectory(descPath);

                foreach (var item in DescImgs)
                {
                    item.SaveAs(descPath + "/" + item.FileName);
                }

                // Grant access to the parent directory => avoid access_denied exception
                var dir = new DirectoryInfo(HttpContext.Current.Server.MapPath(parent_dir));
                SetAttributesNormal(dir);

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

        public static bool ReplaceMainImg(int id, string filename)
        {
            string dir = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + id.ToString());

            // delete old main image
            try
            {
                if (Directory.Exists(dir + "/Main"))
                {
                    Directory.Delete(dir + "/Main", true);
                }
            }
            catch (Exception)
            {
                return false;
            }

            
            try
            {
                // take given image from gallery and make it the main img
                var gFile = Directory.EnumerateFiles(dir + "/Gallery")
                             .FirstOrDefault(x => Path.GetFileName(x) == filename);

                if (gFile != null)
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

        public static bool deleteProductImages(int id)
        {
            string path = HttpContext.Current.Server.MapPath("~/Content/Images/Products/" + id.ToString() );
            DirectoryInfo dir = new DirectoryInfo(path);

            try
            {
                if (dir.Exists)
                {
                    dir.Delete(true);
                }
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }

        private static void SetAttributesNormal(DirectoryInfo dir)
        {
            foreach (var subDir in dir.GetDirectories())
                SetAttributesNormal(subDir);
            foreach (var file in dir.GetFiles())
            {
                file.Attributes = FileAttributes.Normal;
            }
        }
        
    }
}