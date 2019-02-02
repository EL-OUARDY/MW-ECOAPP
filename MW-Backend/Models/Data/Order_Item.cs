using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models.Data
{
    public class Order_Item
    {
        public int Id { get; set; }

        public Order Order { get; set; }

        public Product Product { get; set; }

        public byte Quantity { get; set; }

        [Required]
        [MaxLength(20)]
        public string Status { get; set; }

        [Required]
        [MaxLength(20)]
        public string Shipping { get; set; }

    }
}