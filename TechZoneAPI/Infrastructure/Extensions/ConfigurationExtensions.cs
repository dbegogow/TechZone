namespace TechZoneAPI.Infrastructure.Extensions;

public static class ConfigurationExtensions
{
    public static string GetDefaultConnectionString(this IConfiguration configuration)
            => configuration.GetConnectionString("DefaultConnection");

    public static string GetFrontendUrl(this IConfiguration configuration)
        => configuration.GetValue<string>("frontend_url");
}
