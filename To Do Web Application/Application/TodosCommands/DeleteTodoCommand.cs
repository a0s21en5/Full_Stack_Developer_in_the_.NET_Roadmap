using MediatR;

namespace To_Do_Web_Application.Application.TodosCommands
{
    public class DeleteTodoCommand : IRequest<bool>
    {
        public int Id { get; set; }
    }
}
