using MediatR;
using To_Do_Web_Application.Application.TodosCommands;
using To_Do_Web_Application.Business.TodoDataAccess.Interfaces;
using To_Do_Web_Application.Domain.Models;

namespace To_Do_Web_Application.Handlers.TodosCommandHandlers
{
    public class CreateTodoCommandHandler : IRequestHandler<CreateTodoCommand, bool>
    {
        private readonly ITodoDataAccess _todoDataAccess;

        public CreateTodoCommandHandler(ITodoDataAccess todoDataAccess)
        {
            _todoDataAccess = todoDataAccess;
        }

        public async Task<bool> Handle(CreateTodoCommand request, CancellationToken cancellationToken)
        {
            Todo Checktodo = await _todoDataAccess.GetTodoById(request.Todo.Id);
            if (Checktodo == null)
            {
                return await _todoDataAccess.CreateTodo(request.Todo);
            }
            else
            {
                return false;
            }
        }
    }
}
