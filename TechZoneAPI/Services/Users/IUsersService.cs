using System.Threading.Tasks;

namespace TechZoneAPI.Services.Users
{
    public interface IUsersService
    {
        Task CreateUser(
            string email,
            string password,
            string firstName,
            string lastName,
            string phoneNumber);
    }
}
