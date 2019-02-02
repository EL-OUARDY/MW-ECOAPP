using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models.Data
{
    public class Order
    {
        public int Id { get; set; }

        public ApplicationUser User { get; set; }

        public DateTime Date_Placed { get; set; }

        [Required]
        [MaxLength(20)]
        public string Status { get; set; }

        [Required]
        [MaxLength(20)]
        public string Payment { get; set; }

        public decimal GrandTotal { get; set; }
    }
}