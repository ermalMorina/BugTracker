using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BugTrackerNET.Data;
using BugTrackerNET.Models;

namespace BugTrackerNET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDatasController : ControllerBase
    {
        private readonly BugTrackerNETContext _context;

        public UserDatasController(BugTrackerNETContext context)
        {
            _context = context;
        }

        // GET: api/UserDatas
        [HttpGet()]
        public async Task<ActionResult<IEnumerable<UserData>>> GetUserData()
        {
            return await _context.UserData.ToListAsync();
        }

        // GET: api/UserDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserData>> GetUserData(string id)
        {
            var userData = await _context.UserData.FindAsync(id);

            if (userData == null)
            {
                return NotFound();
            }

            return userData;
        }

        // PUT: api/UserDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{ideeeeeeee}")]
        public async Task<IActionResult> PutUserData(string ideeeeeeee, UserData userData)
        {
            if (ideeeeeeee != userData.Email)
            {
                return BadRequest();
            }

            _context.Entry(userData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDataExists(ideeeeeeee))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserData>> PostUserData(UserData userData)
        {
            _context.UserData.Add(userData);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserDataExists(userData.Email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUserData", new { id = userData.Email }, userData);
        }



        /*
        [HttpPost]
        public async Task<ActionResult<UserData>> PostUserDataLogin(string email, string password)
        {
            if (email == null || password == null)
            {
                return null;
            }


            var UserDatasLogin = _context.UserData.Where(e => e.Email.Equals(email) && e.Password.Equals(password));

            return CreatedAtAction("GetUserData", new { id = email, password = password });
            
        }
        */



        // DELETE: api/UserDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserData(string id)
        {
            var userData = await _context.UserData.FindAsync(id);
            if (userData == null)
            {
                return NotFound();
            }

            _context.UserData.Remove(userData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserDataExists(string id)
        {
            return _context.UserData.Any(e => e.Email == id);
        }
    }
}
