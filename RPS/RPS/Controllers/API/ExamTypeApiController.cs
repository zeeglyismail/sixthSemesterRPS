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
    [RoutePrefix("ExamTypeApi")]
    public class ExamTypeApiController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ToString());
        SqlCommand cmd;


        [HttpPost]
        [Route("Insert")]

        public int Insert(ExamType sdo)
        {

            con.Open();

            cmd = new SqlCommand("SP_ExamType", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "CREATE");
            cmd.Parameters.AddWithValue("@ExamTypeName", sdo.ExamTypeName);
            cmd.Parameters.AddWithValue("@TotalMarks", sdo.TotalMarks);
            cmd.ExecuteNonQuery();
            con.Close();
            return 1;

        }

        [HttpGet]
        [Route("GetAll")]
        public dynamic GetAll()
        {
            var result = new List<ExamType>();
            con.Open();

            cmd = new SqlCommand("SP_ExamType", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    ExamType DI = new ExamType();

                    DI.ExamTypeID = Convert.ToInt32(reader["ExamTypeID"]);
                    DI.ExamTypeName = Convert.ToString(reader["ExamTypeName"]);
                    DI.TotalMarks = Convert.ToInt32(reader["TotalMarks"]);

                    result.Add(DI);
                }
            }

            con.Close();

            return result;
        }

        [HttpGet]
        [Route("GetByExamTypeID")]
        public dynamic GetById(int ExamTypeID)
        {
            var result = new List<ExamType>();
            con.Open();

            cmd = new SqlCommand("SP_ExamType", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");
            cmd.Parameters.AddWithValue("@ExamTypeID", ExamTypeID);

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    ExamType DI = new ExamType();

                    DI.ExamTypeID = Convert.ToInt32(reader["ExamTypeID"]);
                    DI.ExamTypeName = Convert.ToString(reader["ExamTypeName"]);
                    DI.TotalMarks = Convert.ToInt32(reader["TotalMarks"]);

                    result.Add(DI);
                }
            }

            con.Close();

            return result;
        }

        [HttpPost]
        [Route("Update")]
        public int Update(ExamType sdo)
        {
            if (sdo.ExamTypeID != 0)
            {
                con.Open();

                cmd = new SqlCommand("SP_ExamType", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Action", "UPDATE");
                cmd.Parameters.AddWithValue("@ExamTypeID", sdo.ExamTypeID);
                cmd.Parameters.AddWithValue("@ExamTypeName", sdo.ExamTypeName);
                cmd.Parameters.AddWithValue("@TotalMarks", sdo.TotalMarks);
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
        public dynamic Delete(int ExamTypeID)
        {
            con.Open();

            cmd = new SqlCommand("SP_ExamType", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "DELETE");
            cmd.Parameters.AddWithValue("@ExamTypeID", ExamTypeID);
            cmd.ExecuteNonQuery();

            con.Close();

            return 1;
        }
    }
}
