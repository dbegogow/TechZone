using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.Feature;

namespace TechZoneAPI.Data.Models
{
    public class FeatureType
    {
        public int Id { get; init; }

        [Required]
        [MaxLength(NameMaxLength)]
        public string Name { get; set; }
    }
}
