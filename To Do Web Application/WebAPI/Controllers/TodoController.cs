using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using To_Do_Web_Application.Application.TodosCommands;
using To_Do_Web_Application.Domain.Models;

namespace To_Do_Web_Application.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TodoController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Route("CreateTodo")]
        [HttpPost]
        public async Task<IActionResult> CreateTodo(Todo todo)
        {
            bool CheckCreateTodo = await _mediator.Send(new CreateTodoCommand() { Todo = todo });
            return Ok(CheckCreateTodo);
        }

        [Route("DeleteTodo/{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteTodo(int id)
        {
            bool CheckDeleteTodo = await _mediator.Send(new DeleteTodoCommand() { Id = id });
            return Ok(CheckDeleteTodo);
        }
    }
}
