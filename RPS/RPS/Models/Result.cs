using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RPS.Models
{
    public class Result
    {
        public int ResultID { get; set; }
        public int RegNo { get; set; }
        public string StudentName { get; set; }
        public string DepartmentName { get; set; }  
        public int SemID { get; set; }
        public string SubName { get; set; }
        public string ExamName { get; set; }
        public int TotalMarks { get; set; }
        public int ObtainedMarks { get; set; }  
    }
}