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
            builder
                .Entity<Product>()
                .HasOne(p => p.Brand)
                .WithMany(b => b.Products)
                .HasForeignKey(p => p.BrandId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products)
                .HasForeignKey(p => p.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<Product>()
                .HasMany(p => p.Features)
                .WithMany(f => f.Products);

            builder
                .Entity<Feature>()
                .HasOne(f => f.FeatureType)
                .WithMany(ft => ft.Features)
                .HasForeignKey(f => f.FeatureTypeId)
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(builder);
        }
    }
}
