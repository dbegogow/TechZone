using System.Threading.Tasks;

namespace TechZoneAPI.Services.Users
{
    public interface IUsersService
    {
        Task Create(
            string email,
            string password,
            string firstName,
            string lastName,
            string phoneNumber);

        Task<string> GetIdByEmail(string email);
    }
}
