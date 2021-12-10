using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.Product;

namespace TechZoneAPI.Data.Models
{
    public class Product
    {
        public int Id { get; init; }

        [MaxLength(ModelMaxLength)]
        public string Model { get; set; }

        [Required]
        public string BrandId { get; set; }

        public Brand Brand { get; set; }

        public ICollection<Feature> Features { get; init; } = new HashSet<Feature>();
    }
}
