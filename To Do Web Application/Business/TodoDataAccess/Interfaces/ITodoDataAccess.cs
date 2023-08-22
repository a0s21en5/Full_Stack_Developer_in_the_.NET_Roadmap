using To_Do_Web_Application.Domain.Models;

namespace To_Do_Web_Application.Business.TodoDataAccess.Interfaces
{
    public interface ITodoDataAccess
    {
        //Create Todo
        Task<bool> CreateTodo(Todo todo);


        //Delete Todo
        Task<bool> DeleteTodo(int id);


        //Get Todo By Id
        Task<Todo> GetTodoById(int id);
    }
}
