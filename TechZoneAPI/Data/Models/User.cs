using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.User;
using static TechZoneAPI.Data.DataConstants.Common;

namespace TechZoneAPI.Data.Models
{
    [Index(nameof(Email), IsUnique = true)]
    public class User
    {
        [Key]
        [Required]
        [MaxLength(IdMaxLength)]
        public string Id { get; init; } = Guid.NewGuid().ToString();

        [Required]
        [MaxLength(EmailMaxLength)]
        public string Email { get; set; }

        [Required]
        [MaxLength(PasswordMaxLength)]
        public string Password { get; set; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(PhoneNumberMaxLength)]
        public string PhoneNumber { get; set; }

        [MaxLength(AddressNameMaxLength)]
        public string Address { get; set; }

        public int? CityId { get; set; }

        public City City { get; set; }
    }
}
