using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace RPS
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                //defaults: new { controller = "Department", action = "DepartmentView", id = UrlParameter.Optional }
                //defaults: new { controller = "Student", action = "StudentInfo", id = UrlParameter.Optional }
                //defaults: new { controller = "Semester", action = "SemesterView", id = UrlParameter.Optional }
                //defaults: new { controller = "ExamType", action = "ExamTypeView", id = UrlParameter.Optional }
                //defaults: new { controller = "ResultEntry", action = "ResultEntryView", id = UrlParameter.Optional }
                //defaults: new { controller = "ResultView", action = "ResultViewStudent", id = UrlParameter.Optional }
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
