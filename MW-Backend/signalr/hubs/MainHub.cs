using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using MW_Backend.Models;
using MW_Backend.Models.Data;

namespace Run_SignalR.signalr.hubs
{
    public class MainHub : Hub
    {
        //[Authorize]
        public override async Task OnConnected()
        {
            using (var db = new ApplicationDbContext())
            {
                db.Connections.Add(new Connection
                {
                    UserName = Context.User.Identity.Name,
                    ConnectionId = Context.ConnectionId,
                    UserAgent = Context.Request.Headers["User-Agent"],
                    LastActivity = DateTime.Now /// DateTimeOffset.UtcNow
                });

                await db.SaveChangesAsync();
            }
        }

        //[Authorize]
        public override async Task OnReconnected()
        {
            using (var db = new ApplicationDbContext())
            {
                var connection = await db.Connections.FindAsync(Context.ConnectionId);

                // Ensure the connection exists
                if (connection == null)
                {
                    db.Connections.Add(new Connection
                    {
                        ConnectionId = Context.ConnectionId,
                        UserAgent = Context.Request.Headers["User-Agent"],
                        LastActivity = DateTime.Now,
                        UserName = Context.User.Identity.Name
                    });
                }
                else
                {
                    connection.LastActivity = DateTime.Now;
                }

                await db.SaveChangesAsync();
            }
        }
        //[System.Web.Http.AllowAnonymous]
        public override async Task OnDisconnected(bool stopCalled)
        {
            using (var db = new ApplicationDbContext())
            {
                var connection = await db.Connections.FindAsync(Context.ConnectionId);
                db.Connections.Remove(connection);
                await db.SaveChangesAsync();
            }
        }
    }
}