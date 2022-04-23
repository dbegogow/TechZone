using System.ComponentModel.DataAnnotations;

using Microsoft.AspNetCore.Identity;

using static TechZoneAPI.Data.Validation.User;

namespace TechZoneAPI.Data.Models;

public class User : IdentityUser
{
    [MaxLength(NameMaxLength)]
    public string FirstName { get; set; }

    [MaxLength(NameMaxLength)]
    public string LastName { get; set; }

    [Required]
    [MaxLength(PasswordMaxLength)]
    public string Password { get; set; }

    [MaxLength(AddressNameMaxLength)]
    public string Address { get; set; }

    public int? CityId { get; set; }

    public City City { get; set; }
}
