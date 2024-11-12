using RPS.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RPS.Controllers.API
{
    [RoutePrefix("StudentWebApi")]

    public class StudentApiController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ToString());
        SqlCommand cmd;


        [HttpPost]
        [Route("Insert")]

        public int Insert (StudentDetails sdo)
        {

            con.Open();

            cmd = new SqlCommand("SP_StudentDetails", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "CREATE");
            cmd.Parameters.AddWithValue("@StudentName", sdo.StudentName);
            cmd.Parameters.AddWithValue("@DeptName", sdo.DeptName);
            cmd.Parameters.AddWithValue("@SessionYear", sdo.SessionYear);
            cmd.ExecuteNonQuery();
            con.Close();
            return 1;

        }

        [HttpGet]
        [Route("GetAll")]
        public dynamic GetAll()
        {
            var result = new List<StudentDetails>();
            con.Open();

            cmd = new SqlCommand("SP_StudentDetails", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    StudentDetails DI = new StudentDetails();

                    DI.RegNo = Convert.ToInt32(reader["RegNo"]);
                    DI.StudentName = Convert.ToString(reader["StudentName"]);
                    DI.DeptName = Convert.ToString(reader["DeptName"]);
                    DI.SessionYear = Convert.ToString(reader["SessionYear"]);


                    result.Add(DI);
                }
            }

            con.Close();

            return result;
        }

        [HttpGet]
        [Route("GetByRegNo")]
        public dynamic GetById(int RegNo)
        {
            var result = new List<StudentDetails>();
            con.Open();
            
            cmd = new SqlCommand("SP_StudentDetails", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");
            cmd.Parameters.AddWithValue("@RegNo", RegNo);

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    StudentDetails DI = new StudentDetails();

                    DI.RegNo = Convert.ToInt32(reader["RegNo"]);
                    DI.StudentName = Convert.ToString(reader["StudentName"]);
                    DI.DeptName = Convert.ToString(reader["DeptName"]);
                    DI.SessionYear = Convert.ToString(reader["SessionYear"]);

                    result.Add(DI);
                }
            }

            con.Close();

            return result;
        }

        [HttpPost]
        [Route("Update")]
        public int Update(StudentDetails sdo)
        {
            if (sdo.RegNo != 0)
            {
                con.Open();

                cmd = new SqlCommand("SP_StudentDetails", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Action", "UPDATE");
                cmd.Parameters.AddWithValue("@RegNo", sdo.RegNo);
                cmd.Parameters.AddWithValue("@StudentName", sdo.StudentName);
                cmd.Parameters.AddWithValue("@DeptName", sdo.DeptName);
                cmd.Parameters.AddWithValue("@SessionYear", sdo.SessionYear);
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
        public dynamic Delete(int RegNo)
        {
            con.Open();

            cmd = new SqlCommand("SP_StudentDetails", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "DELETE");
            cmd.Parameters.AddWithValue("@RegNo", RegNo);
            cmd.ExecuteNonQuery();

            con.Close();

            return 1;
        }
    }
}
