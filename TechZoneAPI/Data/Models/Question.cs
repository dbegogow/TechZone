using System.ComponentModel.DataAnnotations;

using TechZoneAPI.Data.Models.Base;

using static TechZoneAPI.Data.Validation.Question;

namespace TechZoneAPI.Data.Models;

public class Question : DeletableEntity
{
    public int Id { get; set; }

    [Required]
    [MaxLength(TitleMaxLength)]
    public string Title { get; set; }

    [Required]
    public string Answer { get; set; }
}
