using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models.Data
{
    public class Coupon
    {
        [Key]
        public string Label { get; set; }

        [Required]
        public decimal Value { get; set; }

        public DateTime Expire_At { get; set; }
    }
}