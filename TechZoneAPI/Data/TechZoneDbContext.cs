using Microsoft.EntityFrameworkCore;

namespace TechZoneAPI.Data
{
    public class TechZoneDbContext : DbContext
    {
        public TechZoneDbContext(DbContextOptions options)
            : base(options)
        {
        }
    }
}
