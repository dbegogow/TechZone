using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TechZoneAPI.Data;
using TechZoneAPI.Data.Models;
using static TechZoneAPI.WebConstants;

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
            CreateRole(services, AdminRoleName);
            SeedAdministrator(services);

            return app;
        }

        private static void MigrateDatabase(IServiceProvider services)
        {
            var data = services
                .GetRequiredService<TechZoneDbContext>();

            data?.Database.Migrate();
        }

        private static void CreateRole(IServiceProvider services, string roleName)
        {
            var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();

            Task
                .Run(async () =>
                {
                    if (await roleManager.RoleExistsAsync(roleName))
                    {
                        return;
                    }

                    var role = new IdentityRole { Name = roleName };

                    await roleManager.CreateAsync(role);
                })
                .GetAwaiter()
                .GetResult();
        }

        private static void SeedAdministrator(IServiceProvider services)
        {
            var userManager = services.GetRequiredService<UserManager<User>>();

            Task
                .Run(async () =>
                {
                    const string adminEmail = "admin_tz@gmail.com";
                    const string adminPassword = "Admintz1";

                    var admin = await userManager.FindByEmailAsync(adminEmail);

                    if (admin != null)
                    {
                        return;
                    }

                    var user = new User
                    {
                        Email = adminEmail,
                        UserName = adminEmail
                    };

                    await userManager.CreateAsync(user, adminPassword);

                    await userManager.AddToRoleAsync(user, AdminRoleName);
                })
                .GetAwaiter()
                .GetResult();
        }
    }
}
