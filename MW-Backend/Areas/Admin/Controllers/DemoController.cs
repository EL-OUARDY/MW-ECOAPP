using MW_Backend.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace MW_Backend.Areas.Admin.Controllers
{
    public class DemoController : ApiController
    {
        // GET: api/Demo
        public string Get()
        {
            return DateTimeOffset.Now.ToString("yyyyMMddhhmmss");
        }

        // GET: api/Demo/5
        [HttpGet]
        [Route("api/Demo/{pid}/{vid}")]
        public string Get(int pid, int vid)
        {
            var _dir = new Product_Dir(pid);
            return _dir.GetVariantImage(vid);
            //return DateTimeOffset.Now.ToString("yyyyMMddhhmmss");
        }


        // POST: api/Demo
        public IHttpActionResult Post([FromBody] string Variant)
        {
            var Image = HttpContext.Current.Request.Files["Image"];

            var variant = HttpContext.Current.Request["Variant"];

            var model = (variant != null) ? variant : "From Post";

            return Ok(model);
        }
    }
}
