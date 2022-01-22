using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using TechZoneAPI.Models.Questions;
using TechZoneAPI.Services.Questions;

namespace TechZoneAPI.Controllers
{
    [Route("api/questions")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly IQuestionsService _questions;

        public QuestionsController(IQuestionsService questions)
            => this._questions = questions;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuestionServiceModel>>>
            GetQuestions()
        {
            var questions = await this._questions
                .AllQuestions();

            return Ok(questions);
        }
    }
}
