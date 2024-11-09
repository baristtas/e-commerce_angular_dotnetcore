using ECommerceAPI.Application.Validators.Products;
using ECommerceAPI.Persistence;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using ECommerceAPI.Infrastructure;
using ECommerceAPI.Infrastructure.Filters;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//Fluent validation için o assembly'e ait bir class vermemiz yeterli.
builder.Services.AddControllers(options =>
{
    options.Filters.Add<ValidationFilter>();

}).AddFluentValidation(configuration =>
configuration.RegisterValidatorsFromAssemblyContaining<ValidatorCreateProduct>())
.ConfigureApiBehaviorOptions(options => options.SuppressModelStateInvalidFilter = true);


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options => options.AddDefaultPolicy(policy =>
{
    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200","https://localhost:4200");
}));

builder.Services.AddPersistenceServices();

var app = builder.Build();

app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
