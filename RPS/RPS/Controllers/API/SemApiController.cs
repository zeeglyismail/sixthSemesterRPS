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
    [RoutePrefix("SemApi")]
    public class SemApiController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ToString());
        SqlCommand cmd;


        [HttpPost]
        [Route("Insert")]

        public int Insert(Semester sdo)
        {

            con.Open();

            cmd = new SqlCommand("SP_Semester", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "CREATE");
            cmd.Parameters.AddWithValue("@SemID", sdo.SemID);
            cmd.Parameters.AddWithValue("@Sub1", sdo.Sub1);
            cmd.Parameters.AddWithValue("@Sub2", sdo.Sub2);
            cmd.Parameters.AddWithValue("@Sub3", sdo.Sub3);
            cmd.Parameters.AddWithValue("@Sub4", sdo.Sub4);
            cmd.Parameters.AddWithValue("@Sub5", sdo.Sub5);

            cmd.ExecuteNonQuery();
            con.Close();
            return 1;

        }

        [HttpGet]
        [Route("GetAll")]
        public dynamic GetAll()
        {
            var result = new List<Semester>();
            con.Open();

            cmd = new SqlCommand("SP_Semester", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "GETALL");


            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    Semester DI = new Semester();

                    DI.SemID = Convert.ToInt32(reader["SemID"]);
                    DI.Sub1 = Convert.ToString(reader["Sub1"]);
                    DI.Sub2 = Convert.ToString(reader["Sub2"]);
                    DI.Sub3 = Convert.ToString(reader["Sub3"]);
                    DI.Sub4 = Convert.ToString(reader["Sub4"]);
                    DI.Sub5 = Convert.ToString(reader["Sub5"]);


                    result.Add(DI);
                }
            }

            con.Close();

            return result;
        }

        [HttpGet]
        [Route("GetBySemID")]
        public dynamic GetBySemID(int SemID)
        {
            var result = new List<Semester>();
            con.Open();

            cmd = new SqlCommand("SP_Semester", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");
            cmd.Parameters.AddWithValue("@SemID", SemID);

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    Semester DI = new Semester();

                    DI.SemID = Convert.ToInt32(reader["SemID"]);
                    DI.Sub1 = Convert.ToString(reader["Sub1"]);
                    DI.Sub2 = Convert.ToString(reader["Sub2"]);
                    DI.Sub3 = Convert.ToString(reader["Sub3"]);
                    DI.Sub4 = Convert.ToString(reader["Sub4"]);
                    DI.Sub5 = Convert.ToString(reader["Sub5"]);

                    result.Add(DI);
                }
            }

            con.Close();

            return result;
        }

        [HttpPost]
        [Route("Update")]
        public int Update(Semester sdo)
        {
            if (sdo.SemID != 0)
            {
                con.Open();

                cmd = new SqlCommand("SP_Semester", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Action", "UPDATE");
                cmd.Parameters.AddWithValue("@SemID", sdo.SemID);
                cmd.Parameters.AddWithValue("@Sub1", sdo.Sub1);
                cmd.Parameters.AddWithValue("@Sub2", sdo.Sub2);
                cmd.Parameters.AddWithValue("@Sub3", sdo.Sub3);
                cmd.Parameters.AddWithValue("@Sub4", sdo.Sub4);
                cmd.Parameters.AddWithValue("@Sub5", sdo.Sub5);
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
        public dynamic Delete(int SemID)
        {
            con.Open();

            cmd = new SqlCommand("SP_Semester", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "DELETE");
            cmd.Parameters.AddWithValue("@SemID", SemID);
            cmd.ExecuteNonQuery();

            con.Close();

            return 1;
        }
    }
}
