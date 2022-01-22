using System.Threading.Tasks;

namespace TechZoneAPI.Services.Users
{
    public interface IUserService
    {
        Task CreateUser(
            string email,
            string password,
            string );
    }
}
