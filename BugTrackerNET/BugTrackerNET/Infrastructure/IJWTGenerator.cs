using BugTrackerNET.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugTrackerNET.Infrastructure
{
    interface IJWTGenerator
    {
        string CreateToken(UserDataLogin user);

    }
}
