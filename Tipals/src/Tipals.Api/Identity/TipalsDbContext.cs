using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Tipals.Api.Identity
{
    public class TipalsDbContext :IdentityDbContext<User, Role, string>
    {
        public TipalsDbContext(DbContextOptions<TipalsDbContext> options) : base(options)
        {
        }
    }
}
