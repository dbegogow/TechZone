using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.Feature;

namespace TechZoneAPI.Data.Models
{
    public class Feature
    {
        public int Id { get; init; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        [Required]
        [MaxLength(ValueMaxLength)]
        public string Value { get; set; }

        public ICollection<Product> Products { get; init; } = new HashSet<Product>();
    }
}
