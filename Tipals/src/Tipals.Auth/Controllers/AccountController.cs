using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Tipals.Domain.Entities;

namespace Tipals.Auth.Controllers
{
    [AllowAnonymous]
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly ILogger _logger;

        public AccountController(
            UserManager<User> userManager,
            SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = Log.ForContext<AccountController>();

        }

        [HttpPost]
        [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.Forbidden)]
        public async Task<IActionResult> Login(string email, string password, bool rememberLogin)
        {
            var result = await _signInManager.PasswordSignInAsync(email, password, rememberLogin, lockoutOnFailure: true);
            if (result.Succeeded)
            {
                _logger.Information($"Logged in User: {email}");
                return Ok(true);
            }

            if (result.IsLockedOut)
            {
                var errorMessage = $"Locked in User: {email}";
                _logger.Warning(errorMessage);
                return Forbid(errorMessage);
            }

            if (result.IsNotAllowed)
            {
                var errorMessage = $"Login not allowed for User: {email}";
                _logger.Warning(errorMessage);
                return Forbid(errorMessage);
            }

            return BadRequest("Invalid email and/or password");
        }

        //[HttpPost]
        //[ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        //public async Task<IActionResult> Logout()
        //{
        //    await _signInManager.SignOutAsync();
        //    return Ok(true);
        //}


        [HttpPost]
        [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Register(string email, string password)
        {
            var user = new User { UserName = email, Email = email };
            var result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded)
            {
                _logger.Information($"Registered user: {email}");
                return Ok(true);
            }

            var errorMessage = result.Errors.Select(x => x.Description).Aggregate((x, y) => $"{x}; {y}");
            _logger.Error(errorMessage);
            return BadRequest(errorMessage);
        }
    }
}
