using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;

namespace Tipals.Api.Identity
{
    public class User : IdentityUser
    {
        public DateTime BirthDate { get; set; }
    }
}
