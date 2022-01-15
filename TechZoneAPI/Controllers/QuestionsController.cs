using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TechZoneAPI.Models.Questions;

namespace TechZoneAPI.Controllers
{
    [Route("api/questions")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<QuestionServiceModel>>> GetQuestions()
        {
            
        }
    }
}
