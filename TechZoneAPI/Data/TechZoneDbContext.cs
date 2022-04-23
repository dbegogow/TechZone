using TechZoneAPI.Data.Models;

using TechZoneAPI.Infrastructure.Services;

using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using TechZoneAPI.Data.Models.Base;

namespace TechZoneAPI.Data;

public class TechZoneDbContext : IdentityDbContext<User>
{
    private readonly ICurrentUserService currentUser;

    public TechZoneDbContext(
        DbContextOptions<TechZoneDbContext> options,
        ICurrentUserService currentUser)
        : base(options)
        => this.currentUser = currentUser;

    public DbSet<Product> Products { get; init; }

    public DbSet<Brand> Brands { get; init; }

    public DbSet<Feature> Features { get; init; }

    public DbSet<FeatureType> FeatureTypes { get; init; }

    public DbSet<Image> Images { get; init; }

    public DbSet<Category> Categories { get; init; }

    public DbSet<Question> Questions { get; init; }

    public DbSet<City> Cities { get; init; }

    public override int SaveChanges(bool acceptAllChangesOnSuccess)
    {
        this.ApplyAuditInformation();

        return base.SaveChanges(acceptAllChangesOnSuccess);
    }

    public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken)
    {
        this.ApplyAuditInformation();

        return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
    }

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

    private void ApplyAuditInformation()
        => this.ChangeTracker
            .Entries()
            .ToList()
            .ForEach(entry =>
            {
                var userName = this.currentUser.GetUserName();

                if (entry.Entity is IDeletableEntity deletableEntity)
                {
                    if (entry.State == EntityState.Deleted)
                    {
                        deletableEntity.DeletedOn = DateTime.UtcNow;
                        deletableEntity.DeletedBy = userName;
                        deletableEntity.IsDeleted = true;

                        entry.State = EntityState.Modified;

                        return;
                    }
                }

                if (entry.Entity is IEntity entity)
                {
                    if (entry.State == EntityState.Added)
                    {
                        entity.CreatedOn = DateTime.UtcNow;
                        entity.CreatedBy = userName;
                    }
                    else if (entry.State == EntityState.Modified)
                    {
                        entity.ModifiedOn = DateTime.UtcNow;
                        entity.ModifiedBy = userName;
                    }
                }
            });
}
