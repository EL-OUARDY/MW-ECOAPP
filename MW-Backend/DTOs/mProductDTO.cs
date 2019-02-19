using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Web;


namespace MW_Backend.DTOs
{
    public class mProductDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Slug { get; set; }

        public decimal Price { get; set; }

        public string Image
        {
            get
            {
                //Handling Exceptions !!
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
    }
}