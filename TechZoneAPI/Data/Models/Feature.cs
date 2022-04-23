using System.ComponentModel.DataAnnotations;

using TechZoneAPI.Data.Models.Base;

using static TechZoneAPI.Data.Validation.Feature;

namespace TechZoneAPI.Data.Models;

public class Feature : DeletableEntity
{
    public int Id { get; set; }

    public int FeatureTypeId { get; set; }

    public FeatureType FeatureType { get; set; }

    [Required]
    [MaxLength(ValueMaxLength)]
    public string Value { get; set; }

    public bool IsMain { get; init; }

    public ICollection<Product> Products { get; init; } = new HashSet<Product>();
}
