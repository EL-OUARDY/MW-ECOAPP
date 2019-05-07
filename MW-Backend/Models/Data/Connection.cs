using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MW_Backend.Models.Data
{
    public class Connection
    {
        [Key]
        public string ConnectionId { get; set; }

        public string UserAgent { get; set; }

        public DateTime LastActivity { get; set; }

        public string UserName { get; set; }
    }
}