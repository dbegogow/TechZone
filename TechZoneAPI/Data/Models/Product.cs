using System.ComponentModel.DataAnnotations;

using TechZoneAPI.Data.Models.Base;

using static TechZoneAPI.Data.Validation.Product;

namespace TechZoneAPI.Data.Models;

public class Product : DeletableEntity
{
    public int Id { get; set; }

    [MaxLength(ModelMaxLength)]
    public string Model { get; set; }

    public int BrandId { get; set; }

    public Brand Brand { get; set; }

    public int Price { get; set; }

    public int? Delivery { get; set; }

    public string Description { get; set; }

    public int CategoryId { get; set; }

    public Category Category { get; set; }

    public ICollection<Feature> Features { get; init; } = new HashSet<Feature>();

    public ICollection<Image> Images { get; init; } = new HashSet<Image>();
}
