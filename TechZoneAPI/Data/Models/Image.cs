using System.ComponentModel.DataAnnotations;

namespace TechZoneAPI.Data.Models
{
    public class Image
    {
        public int Id { get; init; }

        [Required]
        public string Url { get; set; }

        [Required]
        public string ProductId { get; set; }

        public Product Product { get; set; }
    }
}
