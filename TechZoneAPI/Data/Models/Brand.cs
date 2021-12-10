using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.Common;
using static TechZoneAPI.Data.DataConstants.Brand;

namespace TechZoneAPI.Data.Models
{
    public class Brand
    {
        [Key]
        [Required]
        [MaxLength(IdMaxLength)]
        public string Id { get; init; } = Guid.NewGuid().ToString();

        [MaxLength(NameMaxLength)]
        public string Name { get; set; }

        public ICollection<Product> Products { get; init; } = new HashSet<Product>();
    }
}
