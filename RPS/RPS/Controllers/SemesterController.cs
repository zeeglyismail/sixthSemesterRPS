using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RPS.Controllers
{
    public class SemesterController : Controller
    {
        // GET: Semester
        public ActionResult SemesterView()
        {
            return View();
        }
    }
}