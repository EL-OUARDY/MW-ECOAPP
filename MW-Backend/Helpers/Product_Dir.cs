using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace MW_Backend.Helpers
{
    public class Product_Dir
    {
        public string _dir { get; set; }
        public string parent_dir { get; set; }
        public string mainImgPath { get; set; }
        public string galleryPath { get; set; }
        public string descPath { get; set; }
        public string thumbPath { get; set; }

        public Product_Dir(int productId)
        {
            _dir = HttpContext.Current.Server.MapPath("~/Content/Images/Products");
            parent_dir = _dir + "\\" + productId.ToString();
            mainImgPath = parent_dir + "\\Main";
            galleryPath = parent_dir + "\\Gallery";
            descPath = parent_dir + "\\Desc";
            thumbPath = parent_dir + "\\Thumb";
        }

        public bool AddProductImages(HttpFileCollection files)
        {
            try
            {
                var MainImg = files["MainImg"];
                var GalleryImgs = files.GetMultiple("GalleryImgs");
                var DescImgs = files.GetMultiple("DescImgs");

                PrepareDirectories();

                // saving Main Image
                MainImg.SaveAs(mainImgPath + "/" + MakeGuid(MainImg.FileName));

                // saving Gallery Images
                foreach (var item in GalleryImgs)
                    item.SaveAs(galleryPath + "/" + MakeGuid(item.FileName));

                // saving Description Images
                foreach (var item in DescImgs)
                    item.SaveAs(descPath + "/" + MakeGuid(item.FileName));
            }
            catch (Exception)
            {
                return false;
            }
            finally
            {
                GrantAccess();
            }

            return true;
        }

        public bool updateProductImages(HttpFileCollection files, string[] galleryImgsDrop, string[] descImgsDrop)
        {
            try
            {
                var MainImg = files["MainImg"];
                var GalleryImgs = files.GetMultiple("GalleryImgs");
                var DescImgs = files.GetMultiple("DescImgs");

                PrepareDirectories();

                // Main Image
                if (MainImg != null)
                {
                    Directory.Delete(mainImgPath, true); // delete old images if exist
                    Directory.CreateDirectory(mainImgPath);
                    MainImg.SaveAs(mainImgPath + "/" + MakeGuid(MainImg.FileName));
                }

                // Drop Gallery Images
                if (galleryImgsDrop.Length > 0)
                {
                    foreach (var item in galleryImgsDrop)
                        if (File.Exists(galleryPath + "/" + item))
                            File.Delete(galleryPath + "/" + item);
                }

                // Drop Description Images
                if (descImgsDrop.Length > 0)
                {
                    foreach (var item in descImgsDrop)
                        if (File.Exists(descPath + "/" + item))
                            File.Delete(descPath + "/" + item);
                }

                // Save Gallery Images
                foreach (var item in GalleryImgs)
                    item.SaveAs(galleryPath + "/" + MakeGuid(item.FileName));

                // Save Description Images
                foreach (var item in DescImgs)
                    item.SaveAs(descPath + "/" + MakeGuid(item.FileName));

            }
            catch (Exception)
            {
                return false;
            }
            finally
            {
                GrantAccess();
            }
            return true;
        }

        public bool CopyProductImages(HttpFileCollection files, string[] galleryImgsDrop, string[] descImgsDrop, int copyingId, string mainImgFromCopy)
        {
            try
            {
                string copying_dir = _dir + "\\" + copyingId.ToString();
                var MainImg = files["MainImg"];
                var GalleryImgs = files.GetMultiple("GalleryImgs");
                var DescImgs = files.GetMultiple("DescImgs");

                PrepareDirectories();

                // Get all images from the copied product
                // 1-main
                if (MainImg == null)
                {
                    if (mainImgFromCopy != null && mainImgFromCopy != "null" && !string.IsNullOrWhiteSpace(mainImgFromCopy))
                    {
                        var gImg = Directory.EnumerateFiles(copying_dir + "\\Gallery")
                             .FirstOrDefault(x => Path.GetFileName(x) == mainImgFromCopy);

                        File.Copy(gImg, mainImgPath + "\\" + Path.GetFileName(gImg), true);
                    }
                    else
                    {
                        var m = Directory.EnumerateFiles(copying_dir + "\\Main").Select(x => x).FirstOrDefault();
                        File.Copy(m, mainImgPath + "\\" + Path.GetFileName(m), true);
                    }
                }
                else // image sent within request
                {
                    MainImg.SaveAs(mainImgPath + "/" + MakeGuid(MainImg.FileName));
                }

                // 2-gallery
                // add new posted images
                foreach (var item in GalleryImgs)
                    item.SaveAs(galleryPath + "/" + MakeGuid(item.FileName));
                // get the images from the copied product
                var gImgs = Directory.EnumerateFiles(copying_dir + "\\Gallery")
                                        .Where(x => !galleryImgsDrop.Contains(Path.GetFileName(x)))
                                        .Select(x => x);

                foreach (var item in gImgs)
                    File.Copy(item, galleryPath + "\\" + Path.GetFileName(item), true);

                // 3-desc
                // add new posted images
                foreach (var item in DescImgs)
                    item.SaveAs(descPath + "/" + MakeGuid(item.FileName));
                // get the images from the copied product
                var dImgs = Directory.EnumerateFiles(copying_dir + "\\Desc")
                                        .Where(x => !descImgsDrop.Contains(Path.GetFileName(x)))
                                        .Select(x => x);

                foreach (var item in dImgs)
                    File.Copy(item, descPath + "\\" + Path.GetFileName(item), true);
                ///
            }
            catch (Exception)
            {
                return false;
            }
            finally
            {
                GrantAccess();
            }
            return true;
        }

        public bool ReplaceMainImg(string filename)
        {
            try
            {
                // delete old main image
                if (Directory.Exists(mainImgPath))
                    Directory.Delete(mainImgPath, true);

                // take given image from gallery and make it the main img
                var gFile = Directory.EnumerateFiles(galleryPath)
                             .FirstOrDefault(x => Path.GetFileName(x) == filename);

                if (gFile != null)
                {
                    Directory.CreateDirectory(mainImgPath);
                    File.Copy(gFile, mainImgPath + "\\" + filename, true);
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
            finally
            {
                GrantAccess();
            }

            return true;
        }

        public bool DeleteProductImages()
        {
            DirectoryInfo dir = new DirectoryInfo(parent_dir);
            try
            {
                if (dir.Exists)
                    dir.Delete(true);
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }

        public string GetMainImage()
        {
            try
            {
                return Directory.EnumerateFiles(mainImgPath).Select(x => Path.GetFileName(x)).FirstOrDefault();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public IEnumerable<string> GetGalleryImages()
        {
            try
            { 
                return Directory.EnumerateFiles(galleryPath).Select(fn => Path.GetFileName(fn));
            }
            catch (Exception)
            {
                return new string[] { };
            }
        }

        public IEnumerable<string> GetDescImages()
        {
            try
            {
                return Directory.EnumerateFiles(descPath).Select(fn => Path.GetFileName(fn));
            }
            catch (Exception)
            {
                return new string[] { };
            }
        }

        private void PrepareDirectories()
        {
            if (!Directory.Exists(mainImgPath))
                Directory.CreateDirectory(mainImgPath);
            if (!Directory.Exists(galleryPath))
                Directory.CreateDirectory(galleryPath);
            if (!Directory.Exists(descPath))
                Directory.CreateDirectory(descPath);
        }

        private string MakeGuid(string filename)
        {
            var _fileName = Guid.NewGuid().ToString() + Path.GetExtension(filename);
            return _fileName;
        }

        private void SetAttributesNormal(DirectoryInfo dir)
        {
            foreach (var subDir in dir.GetDirectories())
                SetAttributesNormal(subDir);
            foreach (var file in dir.GetFiles())
            {
                file.Attributes = FileAttributes.Normal;
            }
        }

        private void GrantAccess()
        {
            // Grant access to the parent directory => avoid access_denied exception
            var dir = new DirectoryInfo(parent_dir);
            SetAttributesNormal(dir);

        }
    }
}