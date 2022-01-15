using System.Linq;
using TechZoneAPI.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TechZoneAPI.Models.Questions;

namespace TechZoneAPI.Services.Questions
{
    public class QuestionsService : IQuestionsService
    {
        private readonly TechZoneDbContext _data;

        public QuestionsService(TechZoneDbContext data)
        {
            this._data = data;
        }

        public async Task<IEnumerable<QuestionServiceModel>> AllQuestions()
            => await this._data
                .Questions
                .Select(q => new QuestionServiceModel
                {
                    Title = q.Title,
                    Answer = q.Answer
                })
                .ToListAsync();
    }
}
