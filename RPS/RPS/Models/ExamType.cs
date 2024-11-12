using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RPS.Models
{
    public class ExamType
    {
        public int ExamTypeID { get; set; }
        public string ExamTypeName { get; set; }
        public int TotalMarks { get; set; }
    }
}