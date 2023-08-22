using MediatR;
using Microsoft.OpenApi.Models;
using System.Reflection;
using To_Do_Web_Application.Business.TodoDataAccess;
using To_Do_Web_Application.Business.TodoDataAccess.Interfaces;
using To_Do_Web_Application.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ToDo", Version = "v1" });
});

//Add MediatR for handling commands and queries
builder.Services.AddMediatR(Assembly.GetExecutingAssembly());


builder.Services.AddScoped<DbContext>();
builder.Services.AddScoped<ITodoDataAccess, TodoDataAccess>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}



app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseSwagger();  // Enable Swagger UI for API documentation
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDo V1");
});


app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
