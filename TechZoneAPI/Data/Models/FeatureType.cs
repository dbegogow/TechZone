using System.ComponentModel.DataAnnotations;

using TechZoneAPI.Data.Models.Base;

using static TechZoneAPI.Data.Validation.Feature;

namespace TechZoneAPI.Data.Models;

public class FeatureType : DeletableEntity
{
    public int Id { get; init; }

    [Required]
    [MaxLength(NameMaxLength)]
    public string Name { get; set; }

    public ICollection<Feature> Features { get; init; } = new HashSet<Feature>();
}
