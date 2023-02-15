using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BugTrackerNET.Data;
using BugTrackerNET.Models;
using System.Collections;
using BugTrackerNET.Infrastructure;

namespace BugTrackerNET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDatasLoginController : ControllerBase
    {
        private readonly BugTrackerNETContext _context;

        private readonly IJWTGenerator _jwtGenerator;

        public UserDatasLoginController(BugTrackerNETContext context)
        {
            _context = context;
        }




        [HttpPost]
        public ActionResult PostUserDataLogin(UserDataLogin usl)
        {
            if (usl.Email == null || usl.Password == null)
            {
                return BadRequest();
            }


            var UserDatasLogin = _context.UserData.Where(e => e.Email.Equals(usl.Email) && e.Password.Equals(usl.Password));
            

            if (!UserDatasLogin.Any())
            {
                return NotFound();
            }

            return Ok(_jwtGenerator.CreateToken(usl));
        }
    }
}
