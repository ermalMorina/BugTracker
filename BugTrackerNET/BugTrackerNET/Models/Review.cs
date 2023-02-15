using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BugTrackerNET.Models
{
    public class Review
    {
        //ID ReviewUser Email
        [Key]
        public int ID { get; set; }
        public string ReviewUser { get; set; }
        public string Email { get; set; }
    }
}
