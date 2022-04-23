using TechZoneAPI.Data;

using Microsoft.EntityFrameworkCore;

namespace TechZoneAPI.Infrastructure.Extensions;

public static class ApplicationBuilderExtensions
{
    public static IApplicationBuilder UseSwaggerUI(this IApplicationBuilder app)
            => app
                .UseSwagger()
                .UseSwaggerUI(options =>
                {
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Tech Zone API");
                    options.RoutePrefix = "swagger";
                });

    public static void ApplyMigrations(this IApplicationBuilder app)
    {
        using var services = app.ApplicationServices.CreateScope();

        var dbContext = services.ServiceProvider.GetService<TechZoneDbContext>();

        dbContext?.Database.Migrate();
    }
}
