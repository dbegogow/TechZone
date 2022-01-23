using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

using TechZoneAPI.Data;
using TechZoneAPI.Services.Users;

namespace TechZoneAPI.Infrastructure
{
    public static class ApplicationBuilderExtension
    {
        public static IApplicationBuilder PrepareDatabase(
            this IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.CreateScope();
            var services = serviceScope.ServiceProvider;

            MigrateDatabase(services);
            SeedAdministrator(services);

            return app;
        }

        private static void MigrateDatabase(IServiceProvider services)
        {
            var data = services
                .GetRequiredService<TechZoneDbContext>();

            data?.Database.Migrate();
        }

        private static void SeedAdministrator(IServiceProvider services)
        {
            var users = services.GetRequiredService<IUsersService>();

            Task
                .Run(async () =>
                {
                    const string adminEmail = "admin_tz@gmail.com";
                    const string adminPassword = "Admintz1";

                    var adminId = users.GetIdByEmail(adminEmail);

                    if (adminId == null)
                    {
                        return;
                    }

                    await users.Create(adminEmail, adminPassword);
                })
                .GetAwaiter()
                .GetResult();
        }
    }
}
