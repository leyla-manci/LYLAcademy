using LYLAcademy.API.Models;
using System.Threading.Tasks;

namespace LYLAcademy.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string userName, string password);
        Task<bool> UserExists(string userName);

    }
}
