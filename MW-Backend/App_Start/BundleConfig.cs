using System.Web;
using System.Web.Optimization;

namespace MW_Backend
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/scripts/admin/main").Include(
                     "~/Scripts/Admin/runtime.js",
                     "~/Scripts/Admin/polyfills.js",
                     "~/Scripts/Admin/styles.js",
                     "~/Scripts/Admin/vendor.js",
                     "~/Scripts/Admin/main.js"));

            bundles.Add(new ScriptBundle("~/scripts/client/main").Include(
                     "~/Scripts/Client/runtime.js",
                     "~/Scripts/Client/polyfills.js",
                     "~/Scripts/Client/styles.js",
                     "~/Scripts/Client/vendor.js",
                     "~/Scripts/Client/main.js"));
        }
    }
}
