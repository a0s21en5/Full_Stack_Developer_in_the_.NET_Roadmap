using MediatR;
using To_Do_Web_Application.Application.TodosCommands;
using To_Do_Web_Application.Business.TodoDataAccess.Interfaces;
using To_Do_Web_Application.Domain.Models;

namespace To_Do_Web_Application.Handlers.TodosCommandHandlers
{
    public class DeleteTodoCommandHandler : IRequestHandler<DeleteTodoCommand, bool>
    {
        private readonly ITodoDataAccess _todoDataAccess;

        public DeleteTodoCommandHandler(ITodoDataAccess todoDataAccess)
        {
            _todoDataAccess = todoDataAccess;
        }

        public async Task<bool> Handle(DeleteTodoCommand request, CancellationToken cancellationToken)
        {
            Todo todo = await _todoDataAccess.GetTodoById(request.Id);
            if (todo == null)
            {
                return false;
            }
            return await _todoDataAccess.DeleteTodo(request.Id);
        }
    }
}
