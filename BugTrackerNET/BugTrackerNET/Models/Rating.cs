using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BugTrackerNET.Models
{
    public class Rating
    {
        [Key]
        public int ID { get; set; }
        public double UserRating { get; set; }
        public string Email { get; set; }
    }
}
