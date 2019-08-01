using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MW_Backend.Models.Data;


namespace MW_Backend.Helpers
{
    public class ReplaceImageModel
    {
        public int id { get; set; }
        public string filename { get; set; }
    }

    public class FormJob
    {
        public static string Add = "Add";
        public static string Update = "Update";
        public static string Delete = "Delete";
        public static string Copy = "Copy";
    }
}
