using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Tipals.Api.Extensions;
using Tipals.Api.Identity;
using Tipals.Api.Token;

namespace Tipals.Api
{
    public class Startup
    {
        private readonly IHostingEnvironment _environment;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            _environment = env;
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddAutoMapper();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();

            // The secret key every token will be signed with.
            // Keep this safe on the server!
            var secretKey = "mysupersecret_secretkey!123";

            app.UseSimpleTokenProvider(new TokenProviderOptions
            {
                Path = "/api/token",
                Audience = "TipalsAudience",
                Issuer = "Tipals",
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey)),
                SecurityAlgorithms.HmacSha256),
                IdentityResolver = IdentityResolver.GetIdentity
            });
        }
    }
}
