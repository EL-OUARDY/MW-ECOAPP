using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Run_SignalR.signalr.hubs
{
    public class CounterHub : Hub
    {
        static int counter = 0;

        public async void getMyId()
        {
            var id = Context.ConnectionId;
            await Clients.User("edy.developer09@gmail.com").getMyId(id);
        }

        public override Task OnConnected()
        {
            counter++;
            Clients.All.onRecordHit(counter);
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            counter--;
            Clients.All.onRecordHit(counter);
            return base.OnDisconnected(stopCalled);
        }
    }
}