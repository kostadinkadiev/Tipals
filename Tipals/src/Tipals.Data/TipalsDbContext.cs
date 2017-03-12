using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Tipals.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Tipals.Data
{
    public class TipalsDbContext : IdentityDbContext<User>
    {
        public TipalsDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Player> Players { get; set; }
    }
}
