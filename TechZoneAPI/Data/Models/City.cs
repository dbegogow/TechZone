using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.City;

namespace TechZoneAPI.Data.Models
{
    public class City
    {
        public int Id { get; init; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        public ICollection<User> Users { get; init; } = new HashSet<User>();
    }
}
