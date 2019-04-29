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
        static int counter = 1;

        public void getMyId()
        {
            var id = Context.ConnectionId;
            Clients.Caller.getMyId(id);
        }

        public void OnRecordHit()
        {
            Clients.All.onRecordHit(counter);
        }

        public override Task OnConnected()
        {
            counter++;
            OnRecordHit();
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            counter--;
            OnRecordHit();
            return base.OnDisconnected(stopCalled);
        }
    }
}