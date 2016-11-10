using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace Tipals.Api.Identity
{
    public static class IdentityResolver
    {
        //todo Identity
        public static Task<ClaimsIdentity> GetIdentity(string username, string password)
        {
            if (username == "Tipals" && password == "Tipals123")
            {
                return Task.FromResult(new ClaimsIdentity(new GenericIdentity(username, "Token"), new Claim[] { }));
            }

            // Credentials are invalid, or account doesn't exist
            return Task.FromResult<ClaimsIdentity>(null);
        }

    }
}
