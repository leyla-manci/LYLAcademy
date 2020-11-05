using AutoMapper;
using LYLAcademy.API.Data;
using LYLAcademy.API.Dtos;
using LYLAcademy.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LYLAcademy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public UsersController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }


        // GET: api/Users/byName/admin
        [HttpGet("byName/{name}")]
        public async Task<ActionResult<User>> GetUser(string name)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => user.Name == name);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // GET: api/Users/byType/0
        [HttpGet("byType/{type}")]
        public ActionResult<IEnumerable<UserNameDto>> GetUserNameList(int type)
        {
            //userType 0:admin 1:student 2:teacher
            var user = new List<User>();
            user = type switch
            {
                2 => _context.Users.Where(user => user.IsTeacher == 1).ToList<User>(),
                1 => _context.Users.Where(user => user.IsStudent == 1).ToList<User>(),
                _ => _context.Users.Where(user => user.IsAdmin == 1).ToList<User>(),
            };
            if (user == null)
            {
                return NotFound();
            }

            var userNameDTO = _mapper.Map<List<UserNameDto>>(user);
            return userNameDTO;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.UserId)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}
