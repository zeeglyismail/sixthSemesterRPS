using RPS.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using System.Text.RegularExpressions;

namespace RPS.Controllers.API
{
    [RoutePrefix("ResultStudentViewApi")]
    public class ResultViewController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ToString());
        SqlCommand cmd;

        [HttpGet]
        [Route("GetByRegNo")]
        public dynamic GetByRegNo(int RegNo)
        {
            var result = new List<Result>();
            con.Open();

            cmd = new SqlCommand("SP_StudentResultView", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");
            cmd.Parameters.AddWithValue("@RegNo", RegNo);

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    Result DI = new Result();
                    DI.ResultID = Convert.ToInt32(reader["ResultID"]);
                    DI.RegNo = Convert.ToInt32(reader["RegNo"]);
                    DI.StudentName = Convert.ToString(reader["StudentName"]);
                    DI.DepartmentName = Convert.ToString(reader["DepartmentName"]);
                    DI.SemID = Convert.ToInt32(reader["SemID"]);
                    DI.SubName = Convert.ToString(reader["SubName"]);
                    DI.ExamName = Convert.ToString(reader["ExamName"]);
                    DI.TotalMarks = Convert.ToInt32(reader["TotalMarks"]);
                    DI.ObtainedMarks = Convert.ToInt32(reader["ObtainedMarks"]);

                    result.Add(DI);
                }
            }

            con.Close();

            return result;
        }

    }
}
