using System.Threading.Tasks;
using System.Collections.Generic;
using TechZoneAPI.Models.Questions;

namespace TechZoneAPI.Services.Questions
{
    public interface IQuestionsService
    {
        Task<IEnumerable<QuestionServiceModel>> AllQuestions();
    }
}
