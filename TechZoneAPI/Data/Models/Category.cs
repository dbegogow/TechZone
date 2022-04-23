using System.ComponentModel.DataAnnotations;

using TechZoneAPI.Data.Models.Base;

using static TechZoneAPI.Data.Validation.Category;

namespace TechZoneAPI.Data.Models;

public class Category : DeletableEntity
{
    public int Id { get; set; }

    [MaxLength(NameMaxLength)]
    public string Name { get; set; }

    public ICollection<Product> Products { get; init; } = new HashSet<Product>();
}
