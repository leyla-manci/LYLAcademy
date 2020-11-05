using LYLAcademy.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace LYLAcademy.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<User> Login(string userName, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user => (user.Name == userName && user.Password == password));
            if (user == null)
            {
                return null;
            }

            //password salt and hash decode and verify must be better
            return user;
        }

        public async Task<User> Register(User user, string password)
        {
            //passhash,passwordsalt must be created  that is better way to keep pass:todo
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();


            return user;
        }

        public async Task<bool> UserExists(string userName)
        {
            if (await _context.Users.AnyAsync(x => x.Name == userName))
            {
                return true;
            }
            return false;
        }
    }
}
