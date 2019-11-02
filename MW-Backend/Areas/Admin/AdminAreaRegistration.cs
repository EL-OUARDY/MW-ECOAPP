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
            // This is a catch-all for when no other routes matched. Let the Angular router take care of it
            context.MapRoute(
                name: "Admin_angular",
                url: "admin/{*url}",
                defaults: new { controller = "Admin", action = "Index" } // The view that bootstraps Angular
            );
        }
    }
}