using System;
using System.Collections.Generic;
using System.Linq;
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

            var heartBeat = GlobalHost.DependencyResolver.Resolve<ITransportHeartbeat>();

            var monitor = new PresenceMonitor(heartBeat);
            monitor.StartMonitoring();

            app.MapSignalR();
        }
    }
}
