# CQRS and MediatR Pattern Implementation Using .NET Core 6 Web API

## Directory Structure and File Descriptions

### Application/
	- UsersCommands/
		- CreateUserCommand.cs
		- UpdateUserCommand.cs
		- DeleteUserCommand.cs

	- UsersQueries/

		- GetUserByIdQuery.cs
		- GetUserByEmailQuery.cs
		- GetAllUsersQuery.cs

### Handlers
	
	- UsersCommandHandlers
		- CreateUserCommandHandler.cs
		- UpdateUserCommandHandler.cs
		- DeleteUserCommandHandler.cs

	- UsersQueryHandlers
		- GetUserByIdQueryHandler.cs	
		- GetUserByEmailQueryHandler.cs
		- GetAllUsersQueryHandler.cs

### Domain
	- Models/
		- User.cs
	
### Exceptions
	- DomainException.cs

### Infrastructure/
	- Data/
		- DbContext.cs

### Business
	- DataAccess/
    - <>DataAccess.cs
    - Interfaces
        - I<>DataAccess

### WebAPI
	- Controllers/
		- UserController.cs

## Dependencies

- MediatR.Extensions.Microsoft.DependencyInjection
- System.Data.SqlClient
- Dapper
- Swashbuckle.AspNetCore


## Program Configuration

// Add MediatR for handling commands and queries
builder.Services.AddMediatR(Assembly.GetExecutingAssembly());

// Add CORS (Cross-Origin Resource Sharing) support
builder.Services.AddCors();

// Allow any origin, method, and header for CORS
app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());


# Add Swagger in ASP.NET Core app with Angular

- http://localhost:<port>/swagger/index.html

### Add Swagger configuration


builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API Name", Version = "v1" });
});


// Enable Swagger UI for API documentation
app.UseSwagger();  
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API Name V1");
});

// Enable routing
app.UseRouting();  