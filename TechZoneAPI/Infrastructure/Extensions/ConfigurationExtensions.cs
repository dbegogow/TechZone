using Microsoft.Extensions.Configuration;

namespace TechZoneAPI.Infrastructure.Extensions
{
    public static class ConfigurationExtensions
    {
        public static string GetDefaultConnectionString(this IConfiguration configuration)
            => configuration.GetConnectionString("DefaultConnection");

        public static IConfigurationSection GetJwtSettings(this IConfiguration configuration)
            => configuration.GetSection("JwtSettings");

        public static string GetFrontendUrl(this IConfiguration configuration)
            => configuration.GetValue<string>("frontend_url");
    }
}
