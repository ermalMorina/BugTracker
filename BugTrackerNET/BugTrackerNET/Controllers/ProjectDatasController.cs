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
    public class ProjectDatasController : ControllerBase
    {
        private readonly BugTrackerNETContext _context;

        public ProjectDatasController(BugTrackerNETContext context)
        {
            _context = context;
        }
        //TEST
        // GET: api/ProjectDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectData>>> GetProjectData()
        {
            return await _context.ProjectData.ToListAsync();
        }

        // GET: api/ProjectDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectData>> GetProjectData(int id)
        {
            var projectData = await _context.ProjectData.FindAsync(id);

            if (projectData == null)
            {
                return NotFound();
            }

            return projectData;
        }

        // PUT: api/ProjectDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjectData(int id, ProjectData projectData)
        {
            if (id != projectData.ID)
            {
                return BadRequest();
            }
            //TEST
            _context.Entry(projectData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectDataExists(id))
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

        // POST: api/ProjectDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProjectData>> PostProjectData(ProjectData projectData)
        {
            _context.ProjectData.Add(projectData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjectData", new { id = projectData.ID }, projectData);
        }

        // DELETE: api/ProjectDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjectData(int id)
        {
            var projectData = await _context.ProjectData.FindAsync(id);
            if (projectData == null)
            {
                return NotFound();
            }

            _context.ProjectData.Remove(projectData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectDataExists(int id)
        {
            return _context.ProjectData.Any(e => e.ID == id);
        }
    }
}
