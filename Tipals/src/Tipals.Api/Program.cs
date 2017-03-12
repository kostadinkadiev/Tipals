using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;

namespace Tipals.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Get environment variables
            var config = new ConfigurationBuilder()
                .AddEnvironmentVariables("")
                .Build();

            // You need to add these lines for accessing outside of Docker
            var url = config["ASPNETCORE_URLS"] ?? "http://*:5001";
            var env = config["ASPNETCORE_ENVIRONMENT"] ?? "Development";

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseUrls(url)
                .UseEnvironment(env)
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
