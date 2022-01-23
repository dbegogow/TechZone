using System.Threading.Tasks;

namespace TechZoneAPI.Services.Users
{
    public interface IUsersService
    {
        Task Create(
            string email,
            string password,
            string firstName = null,
            string lastName = null,
            string phoneNumber = null);

        Task<string> GetIdByEmail(string email);
    }
}
