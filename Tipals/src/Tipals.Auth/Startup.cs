using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;
using System.IO;
using Tipals.Data;
using Microsoft.EntityFrameworkCore;
using Tipals.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Tipals.Auth
{
    public class Startup
    {
        public string EnvironmentName { get; private set; }

        public Startup(IHostingEnvironment env)
        {
            // Configure the Serilog pipeline
            Log.Logger = new LoggerConfiguration()
                         .MinimumLevel.Verbose()
                         .WriteTo.RollingFile(Path.Combine(env.ContentRootPath, "Tipals-Auth-log-{Date}.txt"))
                         .CreateLogger();


            EnvironmentName = env.EnvironmentName;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<TipalsDbContext>(options => 
                options.UseSqlServer(Configuration[$"ConnectionStrings:{EnvironmentName}"],
                opt => opt.MigrationsAssembly(this.GetType().Namespace)));

            services.AddIdentity<User, IdentityRole>(options =>
                {
                    options.Password.RequireDigit = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequiredLength = 6;
                })
                .AddEntityFrameworkStores<TipalsDbContext>()
                .AddDefaultTokenProviders();

            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddSerilog();

            app.UseDeveloperExceptionPage();

            app.UseIdentity();

            app.UseMvc();
        }
    }
}
