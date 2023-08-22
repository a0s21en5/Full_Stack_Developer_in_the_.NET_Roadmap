# CQRS and MediatR Pattern Implementation Using .NET Core 6 Web API

## Directory Structure and File Descriptions

### Application
	- TodosCommands
		- CreateTodoCommand.cs
		- UpdateTodoCommand.cs
		- DeleteTodoCommand.cs

	- TodosQueries

		- GetTodoByIdQuery.cs
		- GetTodoByEmailQuery.cs
		- GetAllTodosQuery.cs



### Handlers
	- TodosCommandHandlers
		- CreateTodoCommandHandler.cs
		- UpdateTodoCommandHandler.cs
		- DeleteTodoCommandHandler.cs

	- TodosQueryHandlers
		- GetTodoByIdQueryHandler.cs	
		- GetTodoByEmailQueryHandler.cs
		- GetAllTodosQueryHandler.cs



### Domain
	- Models
		- Todo.cs

### Infrastructure
	- Data
		- DbContext.cs


### Exceptions



### Business
	- TodoDataAccess/
    - TodoDataAccess.cs
    - Interfaces
        - ITodoDataAccess


### WebAPI
	- Controllers
		- TodoController.cs

## Dependencies

- MediatR.Extensions.Microsoft.DependencyInjection
- System.Data.SqlClient
- Dapper

## Program Configuration

//Add MediatR for handling commands and queries
builder.Services.AddMediatR(Assembly.GetExecutingAssembly());

//Add CORS (Cross-Origin Resource Sharing) support
builder.Services.AddCors();

//Allow any origin, method, and header for CORS
app.UseCors(x = x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());


# Add Swagger in ASP.NET Core app with Angular

- httplocalhostportswaggerindex.html

### Add Swagger configuration


builder.Services.AddSwaggerGen(c =
{
    c.SwaggerDoc(v1, new OpenApiInfo { Title = Your API Name, Version = v1 });
});


app.UseSwagger();   Enable Swagger UI for API documentation
app.UseSwaggerUI(c =
{
    c.SwaggerEndpoint(swaggerv1swagger.json, Your API Name V1);
});

app.Todoouting();   Enable routing

# Connection String

```
"ConnectionStrings": {
    "DefaultConnection": "Server=DUMBLEDORE;Database=ASHISHS_Local;Trusted_Connection=True"
}
```
# Access Connection String from Repository

```
private readonly string _connectionString;

public DbContext(IConfiguration configuration)
{
    _connectionString = configuration.GetConnectionString("DefaultConnection");
}

private IDbConnection CreateConnection()
{
    return new SqlConnection(_connectionString);
}

public IDbConnection GetOpenConnection()
{
    var connection = CreateConnection();
    connection.Open();
    return connection;
}
````
