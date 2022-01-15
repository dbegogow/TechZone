using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.Common;
using static TechZoneAPI.Data.DataConstants.Feature;

namespace TechZoneAPI.Data.Models
{
    public class Feature
    {
        [Key]
        [Required]
        [MaxLength(IdMaxLength)]
        public string Id { get; init; } = Guid.NewGuid().ToString();

        public int FeatureTypeId { get; set; }

        public FeatureType FeatureType { get; set; }

        [Required]
        [MaxLength(ValueMaxLength)]
        public string Value { get; set; }

        public bool IsMain { get; init; }

        public ICollection<Product> Products { get; init; } = new HashSet<Product>();
    }
}
