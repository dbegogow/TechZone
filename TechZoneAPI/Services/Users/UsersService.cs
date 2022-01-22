using System;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;

using TechZoneAPI.Data;
using TechZoneAPI.Data.Models;

namespace TechZoneAPI.Services.Users
{
    public class UsersService : IUsersService
    {
        private readonly TechZoneDbContext _data;

        public UsersService(TechZoneDbContext data)
            => this._data = data;

        public Task CreateUser(
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

            this._data
                .
        }

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
