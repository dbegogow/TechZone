using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.City;
using static TechZoneAPI.Data.DataConstants.Common;

namespace TechZoneAPI.Data.Models
{
    public class City
    {
        [Key]
        [Required]
        [MaxLength(IdMaxLength)]
        public string Id { get; init; } = Guid.NewGuid().ToString();

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        public ICollection<Address> Addresses { get; init; } = new HashSet<Address>();
    }
}
