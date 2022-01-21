using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using TechZoneAPI.Data;
using TechZoneAPI.Data.Models;
using TechZoneAPI.Services.Questions;

namespace TechZoneAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
            => this.Configuration = configuration;

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddDbContext<TechZoneDbContext>(options => options
                    .UseSqlServer(this.Configuration.GetConnectionString("DefaultConnection")));

            services
                .AddIdentity<User, IdentityRole>(options =>
                {
                    options.Password.RequireNonAlphanumeric = false;
                })
                .AddEntityFrameworkStores<TechZoneDbContext>();

            services.AddControllers();

            services
                .AddTransient<IQuestionsService, QuestionsService>();

            services.AddCors(options =>
            {
                var frontendUrl = this.Configuration.GetValue<string>("frontend_url");

                options.AddDefaultPolicy(builder =>
                {
                    builder
                        .WithOrigins(frontendUrl)
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
                });
            });

            services
                .AddSwaggerGen(c =>
                    c.SwaggerDoc("v1", new OpenApiInfo { Title = "TechZoneAPI", Version = "v1" }));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app
                    .UseDeveloperExceptionPage()
                    .UseSwagger()
                    .UseSwaggerUI(c =>
                        c.SwaggerEndpoint("/swagger/v1/swagger.json", "TechZoneAPI v1"));
            }

            app
                .UseHttpsRedirection()
                .UseRouting()
                .UseCors()
                .UseAuthorization()
                .UseEndpoints(endpoints =>
                {
                    endpoints.MapControllers();
                });
        }
    }
}
