using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models.Data
{
    public class UserProfile
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [StringLength(30)]
        public string FullName { get; set; }

        [StringLength(6)]
        public string Gender { get; set; }

        [StringLength(20)]
        public string Phone { get; set; }

        [StringLength(20)]
        public string Country { get; set; }

        [StringLength(20)]
        public string City { get; set; }

        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }
    }
}