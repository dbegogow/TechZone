using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.Brand;

namespace TechZoneAPI.Data.Models
{
    public class Brand
    {
        public int Id { get; init; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        public ICollection<Product> Products { get; init; } = new HashSet<Product>();
    }
}
