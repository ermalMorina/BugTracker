using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BugTrackerNET.Models
{
    public class UserData
    {
        [Key]
        [Required]
        public string Email { get; set; }
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        public int role { get; set; }
    }
}
