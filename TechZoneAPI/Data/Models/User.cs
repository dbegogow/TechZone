using System.ComponentModel.DataAnnotations;

using Microsoft.AspNetCore.Identity;

using static TechZoneAPI.Data.DataConstants.User;

namespace TechZoneAPI.Data.Models
{
    public class User : IdentityUser
    {
        [MaxLength(NameMaxLength)]
        public string FirstName { get; set; }

        [MaxLength(NameMaxLength)]
        public string LastName { get; set; }

        public string AddressId { get; set; }

        public Address Address { get; set; }
    }
}
