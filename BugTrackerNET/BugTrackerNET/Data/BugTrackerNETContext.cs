using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BugTrackerNET.Models;

namespace BugTrackerNET.Data
{
    public class BugTrackerNETContext : DbContext
    {
        public BugTrackerNETContext (DbContextOptions<BugTrackerNETContext> options)
            : base(options)
        {
        }

        public DbSet<BugTrackerNET.Models.Contact> Contact { get; set; }

        public DbSet<BugTrackerNET.Models.Rating> Rating { get; set; }

        public DbSet<BugTrackerNET.Models.UserData> UserData { get; set; }

        public DbSet<BugTrackerNET.Models.Review> Review { get; set; }

        public DbSet<BugTrackerNET.Models.ProjectData> ProjectData { get; set; }

    }
}
