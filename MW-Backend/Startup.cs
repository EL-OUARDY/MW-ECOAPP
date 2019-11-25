using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Transports;
using Microsoft.Owin;
using Owin;
using UserPresence;

[assembly: OwinStartup(typeof(MW_Backend.Startup))]

namespace MW_Backend
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            GlobalConfiguration.Configuration.EnableDependencyInjection();

            var heartBeat = GlobalHost.DependencyResolver.Resolve<ITransportHeartbeat>();

            var monitor = new PresenceMonitor(heartBeat);
            monitor.StartMonitoring();

            app.MapSignalR();
        }
    }
}
