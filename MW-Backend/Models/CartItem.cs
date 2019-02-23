﻿using MW_Backend.DTOs;
using MW_Backend.Models.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models
{
    public class CartItem
    {
        [Required]
        public mProductDTO Product { get; set; }

        public int Quantity { get; set; }
    }
}