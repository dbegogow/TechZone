using System.ComponentModel.DataAnnotations;

using TechZoneAPI.Data.Models.Base;

using static TechZoneAPI.Data.Validation.Brand;

namespace TechZoneAPI.Data.Models;

public class Brand : DeletableEntity
{
    public int Id { get; set; }

    [Required]
    [MaxLength(NameMaxLength)]
    public string Name { get; set; }

    public ICollection<Product> Products { get; init; } = new HashSet<Product>();
}
