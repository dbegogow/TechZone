using System;
using System.ComponentModel.DataAnnotations;

using static TechZoneAPI.Data.DataConstants.Common;
using static TechZoneAPI.Data.DataConstants.Question;

namespace TechZoneAPI.Data.Models
{
    public class Question
    {
        [Key]
        [Required]
        [MaxLength(IdMaxLength)]
        public string Id { get; init; } = Guid.NewGuid().ToString();

        [Required]
        [MaxLength(TitleMaxLength)]
        public string Title { get; set; }

        [Required]
        public string Answer { get; set; }
    }
}
