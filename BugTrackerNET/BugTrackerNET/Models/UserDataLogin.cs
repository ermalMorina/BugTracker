using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugTrackerNET.Models
{
    public class UserDataLogin
    {
        public String Email { get; set; }
        public String Password { get; set; }
        public string Token { get; internal set; }
    }
}
