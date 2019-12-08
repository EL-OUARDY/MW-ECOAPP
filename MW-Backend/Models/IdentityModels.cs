﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using MW_Backend.Models.Data;

namespace MW_Backend.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
        #region add custom properties to ApplicationUser
        [Required]
        [StringLength(30)]
        public string FullName { get; set; }

        [StringLength(10)]
        public string Gender { get; set; }

        [StringLength(30)]
        public string Phone { get; set; }

        [StringLength(30)]
        public string Country { get; set; }

        [StringLength(30)]
        public string City { get; set; }

        public string Avatar { get; set; }

        [Required]
        public DateTimeOffset Registration_Date { get; set; }

        public DateTimeOffset Last_Visite { get; set; }

        public string UserAgent { get; set; }

        #endregion
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Connection> Connections { get; set; }

        public DbSet<Address_Book> Addresses_Book { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<SubCategory> Sub_Categories { get; set; }

        public DbSet<Coupon> Coupons { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<Product_Variations> Product_Variations { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Order_Item> Order_Items { get; set; }

        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}