using System.Text;

using TechZoneAPI.Data;
using TechZoneAPI.Data.Models;
using TechZoneAPI.Infrastructure.Services;

using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace TechZoneAPI.Infrastructure.Extensions;

public static class ServiceCollectionExtensions
{
    public static JwtSettings GetJwtSettings(
            this IServiceCollection services,
            IConfiguration configuration)
    {
        var jwtSettingsConfiguration = configuration
            .GetSection("JWTSettings");

        services.Configure<JwtSettings>(jwtSettingsConfiguration);

        return jwtSettingsConfiguration.Get<JwtSettings>();
    }

    public static IServiceCollection AddDatabase(
            this IServiceCollection services,
            IConfiguration configuration)
            => services
                .AddDbContext<TechZoneDbContext>(options => options
                    .UseSqlServer(configuration.GetDefaultConnectionString()));

    public static IServiceCollection AddIdentity(this IServiceCollection services)
    {
        services
            .AddIdentity<User, IdentityRole>(options =>
            {
                options.Password.RequiredLength = 6;
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
            })
            .AddEntityFrameworkStores<TechZoneDbContext>();

        return services;
    }


    public static IServiceCollection AddJwtAuthentication(
        this IServiceCollection services,
        JwtSettings jwtSettings)
    {
        services
            .AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = jwtSettings.ValidIssuer,
                    ValidAudience = jwtSettings.ValidAudience,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecurityKey))
                };
            });

        return services;
    }

    public static IServiceCollection AddCors(
        this IServiceCollection services,
        IConfiguration configuration)
            => services.AddCors(options =>
            {
                var frontendUrl = configuration.GetFrontendUrl();

                options.AddDefaultPolicy(builder =>
                {
                    builder
                        .WithOrigins(frontendUrl)
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials();
                });
            });


    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
            => services
                .AddScoped<ICurrentUserService, CurrentUserService>();

    public static IServiceCollection AddSwagger(this IServiceCollection services)
            => services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc(
                    "v1",
                    new OpenApiInfo
                    {
                        Title = "Tech Zone API",
                        Version = "v1"
                    });
            });
}
