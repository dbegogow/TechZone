using System.ComponentModel.DataAnnotations;

using TechZoneAPI.Data.Models.Base;

using static TechZoneAPI.Data.Validation.City;

namespace TechZoneAPI.Data.Models
{
    public class City : DeletableEntity
    {
        public int Id { get; init; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        public ICollection<User> Users { get; init; } = new HashSet<User>();
    }
}
