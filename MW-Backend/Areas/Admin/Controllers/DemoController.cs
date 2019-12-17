using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Demo
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Demo/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Demo/5
        public void Delete(int id)
        {
        }
    }
}
