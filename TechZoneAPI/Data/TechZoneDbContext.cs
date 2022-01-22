using Microsoft.EntityFrameworkCore;

using TechZoneAPI.Data.Models;

namespace TechZoneAPI.Data
{
    public class TechZoneDbContext : DbContext
    {
        public TechZoneDbContext(DbContextOptions<TechZoneDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; init; }

        public DbSet<Brand> Brands { get; init; }

        public DbSet<Feature> Features { get; init; }

        public DbSet<FeatureType> FeatureTypes { get; init; }

        public DbSet<Image> Images { get; init; }

        public DbSet<Category> Categories { get; init; }

        public DbSet<Question> Questions { get; init; }

        public DbSet<City> Cities { get; init; }

        public DbSet<User> Users { get; init; }

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

            builder
                .Entity<Image>()
                .HasOne(i => i.Product)
                .WithMany(p => p.Images)
                .HasForeignKey(i => i.ProductId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<User>()
                .HasOne(u => u.City)
                .WithMany(c => c.Users)
                .HasForeignKey(u => u.CityId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<User>()
                .HasIndex(b => b.Email)
                .IsUnique();


            base.OnModelCreating(builder);
        }
    }
}
