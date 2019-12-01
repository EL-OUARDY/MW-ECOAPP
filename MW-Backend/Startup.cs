using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Transports;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using UserPresence;

[assembly: OwinStartup(typeof(MW_Backend.Startup))]

namespace MW_Backend
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            // odata => No non-OData HTTP route registered. 
            //GlobalConfiguration.Configuration.EnableDependencyInjection();

            var heartBeat = GlobalHost.DependencyResolver.Resolve<ITransportHeartbeat>();

            var monitor = new PresenceMonitor(heartBeat);
            monitor.StartMonitoring();

            app.MapSignalR();
        }
    }
}
