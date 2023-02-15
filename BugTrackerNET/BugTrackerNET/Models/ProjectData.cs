using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BugTrackerNET.Models
{
    public class ProjectData
    {
        [Key]
        public int ID { get; set; }
        public string ProjectProblem { get; set; }
        public int ProjectProgres { get; set; }
        public int Contact { get; set; }
    }
}
