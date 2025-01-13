
using Microsoft.EntityFrameworkCore;
using MyKet.Data;
using System.Text.Json.Serialization;

namespace MyKet.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles); ;
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<DatabaseContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("MyKet"));
            });

	    #region Cors

            builder.Services.AddCors(options => {

                options.AddPolicy("All", policy => {
                    policy.AllowAnyOrigin().WithMethods(
                        HttpMethod.Get.Method,
                        HttpMethod.Put.Method,
                        HttpMethod.Post.Method,
                        HttpMethod.Delete.Method);
                    policy.AllowAnyHeader();
                    policy.AllowAnyMethod();
                });

            });
            #endregion
            
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
