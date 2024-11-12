using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RPS.Controllers
{
    public class ResultViewController : Controller
    {
        // GET: ResultView
        public ActionResult ResultViewStudent()
        {
            return View();
        }
    }
}