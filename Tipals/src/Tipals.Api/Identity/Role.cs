using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;

namespace Tipals.Api.Identity
{
    public class Role : IdentityRole
    {
        public string Description { get; set; }
    }
}
