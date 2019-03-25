using MW_Backend.App_Start;
using System;
using System.Web.Mvc;

namespace MW_Backend.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Admin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
               "Admin_default",
               "Admin/{controller}/{action}/{id}",
               defaults: new { controller = "Admin", action = "Index", id = UrlParameter.Optional }
               ,
                // Set a constraint to only use this for routes identified as server-side routes
                constraints: new
                {
                    serverRoute = new ServerRouteConstraint(url =>
                    {
                        return url.PathAndQuery.Equals("/admin",
                            StringComparison.InvariantCultureIgnoreCase);
                    })
                }
            );


        }
    }
}