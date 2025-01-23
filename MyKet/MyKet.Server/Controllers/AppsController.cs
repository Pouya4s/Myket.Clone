using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyKet.Data;
using MyKet.Data.Entitites;

namespace MyKet.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public AppsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Apps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<App>>> GetApplications()
        {
            return await _context.Applications.Include(a => a.Categories).ToListAsync();
        }

        // GET: api/Apps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<App>> GetApp(int id)
        {
            var app = await _context.Applications.Include(a => a.Categories).SingleOrDefaultAsync(a => a.Id == id);

            if (app == null)
            {
                return NotFound();
            }

            return app;
        }

        // PUT: api/Apps/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutApp(int id, App app)
        {
            if (id != app.Id)
            {
                return BadRequest();
            }

            _context.Entry(app).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppExists(id))
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

        // POST: api/Apps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<App>> PostApp(App app)
        {
            _context.Applications.Add(app);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetApp", new { id = app.Id }, app);
        }

        // DELETE: api/Apps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApp(int id)
        {
            var app = await _context.Applications.FindAsync(id);
            if (app == null)
            {
                return NotFound();
            }

            _context.Applications.Remove(app);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpPost("AddToCategory/{appId}/{categoryId}")]
        public async Task<ActionResult> AddToCategory(int appId, int categoryId)
        {
            var app = await _context.Applications
                .Include(a => a.Categories).SingleOrDefaultAsync(a => a.Id == appId);
            var category = await _context.Categories.FindAsync(categoryId);
            if (app is null || category is null)
            {
                return NotFound();
            }
            app.Categories.Add(category);
            await _context.SaveChangesAsync();
            return Ok(new {isSuccess = true});
        }
        [HttpPost("RemoveFromCategory/{appId}/{categoryId}")]
        public async Task<ActionResult> RemoveFromCategory(int appId, int categoryId)
        {
            var app = await _context.Applications
                .Include(a => a.Categories).SingleOrDefaultAsync(a => a.Id == appId);

            var category = await _context.Categories.FindAsync(categoryId);
            if (app is null || category is null)
            {
                return NotFound();
            }
            if(app.Categories.Contains(category))
                app.Categories.Remove(category);
            await _context.SaveChangesAsync();
            
            return Ok(new { isSuccess = true });
        }
        private bool AppExists(int id)
        {
            return _context.Applications.Any(e => e.Id == id);
        }
    }
}
