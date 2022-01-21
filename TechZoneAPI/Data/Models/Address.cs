using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.Common;
using static TechZoneAPI.Data.DataConstants.Address;

namespace TechZoneAPI.Data.Models
{
    public class Address
    {
        [Key]
        [Required]
        [MaxLength(IdMaxLength)]
        public string Id { get; init; } = Guid.NewGuid().ToString();

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        public int CityId { get; set; }

        public City City { get; set; }

        public ICollection<User> Users { get; init; } = new HashSet<User>();
    }
}
