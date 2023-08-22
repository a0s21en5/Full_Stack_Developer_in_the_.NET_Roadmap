using MediatR;
using To_Do_Web_Application.Domain.Models;

namespace To_Do_Web_Application.Application.TodosCommands
{
    public class CreateTodoCommand : IRequest<bool>
    {
        public Todo Todo { get; set; }
    }
}
