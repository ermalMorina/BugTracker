using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BugTrackerNET.Models
{
    public class Contact
    {
        [Key]
        public int id { get; set; }
        public string UserCOntact { get; set; }
        public string Email { get; set; }
    }
}
