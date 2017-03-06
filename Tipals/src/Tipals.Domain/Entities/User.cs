using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Tipals.Domain.Entities
{
    public class User : IdentityUser
    {
        public Player Player { get; set; }
    }
}
