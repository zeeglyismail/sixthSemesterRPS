using RPS.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RPS.Controllers.API
{
    [RoutePrefix("ResultApi")]
    public class ResultApiController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ToString());
        SqlCommand cmd;


        [HttpPost]
        [Route("Insert")]

        public int Insert(Result sdo)
        {

            con.Open();

            cmd = new SqlCommand("SP_Result", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "CREATE");
            cmd.Parameters.AddWithValue("@RegNo", sdo.RegNo);
            cmd.Parameters.AddWithValue("@StudentName", sdo.StudentName);
            cmd.Parameters.AddWithValue("@DepartmentName", sdo.DepartmentName);
            cmd.Parameters.AddWithValue("@SemID", sdo.SemID);
            cmd.Parameters.AddWithValue("@SubName", sdo.SubName);
            cmd.Parameters.AddWithValue("@ExamName", sdo.ExamName);
            cmd.Parameters.AddWithValue("@TotalMarks", sdo.TotalMarks);
            cmd.Parameters.AddWithValue("@ObtainedMarks", sdo.ObtainedMarks);
            cmd.ExecuteNonQuery();
            con.Close();
            return 1;

        }

        [HttpGet]
        [Route("GetAll")]
        public dynamic GetAll()
        {
            var result = new List<Result>();
            con.Open();

            cmd = new SqlCommand("SP_Result", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");

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

        [HttpGet]
        [Route("GetByResultID")]
        public dynamic GetByResultId(int ResultID)
        {
            var result = new List<Result>();
            con.Open();

            cmd = new SqlCommand("SP_Result", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");
            cmd.Parameters.AddWithValue("@ResultID", ResultID);

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

        [HttpPost]
        [Route("Update")]
        public int Update(Result sdo)
        {
            if (sdo.ResultID != 0)
            {
                con.Open();

                cmd = new SqlCommand("SP_Result", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Action", "UPDATE");
                cmd.Parameters.AddWithValue("@ResultID", sdo.ResultID);
                cmd.Parameters.AddWithValue("@ObtainedMarks", sdo.ObtainedMarks);
                cmd.ExecuteNonQuery();

                con.Close();

                return 1;
            }
            else
            {
                return 0;
            }
        }

        [HttpPost]
        [Route("Delete")]
        public dynamic Delete(int ResultID)
        {
            con.Open();

            cmd = new SqlCommand("SP_Result", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "DELETE");
            cmd.Parameters.AddWithValue("@ResultID", ResultID);
            cmd.ExecuteNonQuery();

            con.Close();

            return 1;
        }

    }
}
