using System.ComponentModel.DataAnnotations;

using TechZoneAPI.Data.Models.Base;

namespace TechZoneAPI.Data.Models;

public class Image : DeletableEntity
{
    public int Id { get; init; }

    [Required]
    public string Url { get; set; }

    public int ProductId { get; set; }

    public Product Product { get; set; }
}
