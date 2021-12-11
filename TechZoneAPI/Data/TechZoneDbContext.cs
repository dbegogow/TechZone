using TechZoneAPI.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace TechZoneAPI.Data
{
    public class TechZoneDbContext : DbContext
    {
        public TechZoneDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; init; }

        public DbSet<Brand> Brands { get; init; }

        public DbSet<Feature> Features { get; init; }

        public DbSet<FeatureType> FeatureTypes { get; init; }

        public DbSet<Image> Images { get; init; }

        public DbSet<Category> Categories { get; init; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
