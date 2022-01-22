using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using TechZoneAPI.Data;
using TechZoneAPI.Data.Models;

namespace TechZoneAPI.Services.Users
{
    public class UsersService : IUsersService
    {
        private readonly TechZoneDbContext _data;

        public UsersService(TechZoneDbContext data)
            => this._data = data;

        public async Task Create(
            string email,
            string password,
            string firstName,
            string lastName,
            string phoneNumber)
        {
            var encryptedPassword = this.EncryptPassword(password);

            var newUser = new User
            {
                Email = email,
                Password = encryptedPassword,
                FirstName = firstName,
                LastName = lastName,
                PhoneNumber = phoneNumber
            };

            await this._data
                .Users
                .AddAsync(newUser);

            await this._data.SaveChangesAsync();
        }

        public async Task<string> GetIdByEmail(string email)
            => await this._data
                .Users
                .Select(u => u.Email)
                .FirstOrDefaultAsync(e => e == email);

        private string EncryptPassword(string password)
        {
            var crypt = new SHA256Managed();
            string hash = string.Empty;

            byte[] crypto = crypt.ComputeHash(Encoding.ASCII.GetBytes(password));

            foreach (byte theByte in crypto)
            {
                hash += theByte.ToString("x2");
            }

            return hash;
        }
    }
}
