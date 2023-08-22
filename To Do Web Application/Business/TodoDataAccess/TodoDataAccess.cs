using Dapper;
using System.Data;
using System.Security.Cryptography.X509Certificates;
using To_Do_Web_Application.Business.TodoDataAccess.Interfaces;
using To_Do_Web_Application.Domain.Models;
using To_Do_Web_Application.Infrastructure.Data;

namespace To_Do_Web_Application.Business.TodoDataAccess
{
    public class TodoDataAccess : ITodoDataAccess
    {
        private readonly DbContext _dbContext;

        public TodoDataAccess(DbContext dbContext)
        {
            _dbContext = dbContext;
        }



        //Get Todo By Id
        public async Task<Todo> GetTodoById(int id)
        {
            using (IDbConnection dbConnection = _dbContext.CreateConnection())
            {
                dbConnection.Open();
                string sQuery = "Select * From Todo Where Id = @Id";
                Todo todo = await dbConnection.QueryFirstOrDefaultAsync(sQuery, new { Id = id });
                dbConnection.Close();
                return todo;
            }
        }



        //Create Todo
        public async Task<bool> CreateTodo(Todo todo)
        {
            using (IDbConnection dbConnection = _dbContext.CreateConnection())
            {
                dbConnection.Open();
                string sQuery = "INSERT INTO Todo (Title, Description) VALUES (@Title, @Description)";
                int count = await dbConnection.ExecuteAsync(sQuery, todo);
                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }



        //Delete Todo
        public async Task<bool> DeleteTodo(int id)
        {
            using (IDbConnection dbConnection = _dbContext.CreateConnection())
            {
                dbConnection.Open();
                string sQuery = "Delete From Todo Where Id = @Id";
                int count = await dbConnection.QueryFirstOrDefaultAsync<int>(sQuery, new { Id = id });
                dbConnection.Close();
                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }
}