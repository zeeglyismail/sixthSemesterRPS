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

namespace RPS.Controllers.Api
{
    [RoutePrefix("DeptApi")]
    public class DeptApiController : ApiController
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ToString());
        SqlCommand cmd;

        [HttpPost]
        [Route("Insert")]
        public int Insert(Department Deptobj)
        {
            con.Open();

            cmd = new SqlCommand("SP_Department", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "CREATE");
            cmd.Parameters.AddWithValue("@DeptName", Deptobj.DeptName);
            cmd.ExecuteNonQuery();

            con.Close();

            return 1;
        }

        [HttpGet]
        [Route("GetAll")]
        public dynamic GetAll()
        {
            var result = new List<Department>();
            con.Open();

            cmd = new SqlCommand("SP_Department", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    Department DI = new Department();

                    DI.DeptID = Convert.ToInt32(reader["DeptID"]);
                    DI.DeptName = Convert.ToString(reader["DeptName"]);

                    result.Add(DI);
                }
            }

            con.Close();

            return result;
        }

        [HttpGet]
        [Route("GetByDeptId")]
        public dynamic GetByDeptId(int DeptID)
        {
            var result = new List<Department>();
            con.Open();

            cmd = new SqlCommand("SP_Department", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "READ");
            cmd.Parameters.AddWithValue("@DeptID", DeptID);

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    Department DI = new Department();

                    DI.DeptID = Convert.ToInt32(reader["DeptID"]);
                    DI.DeptName = Convert.ToString(reader["DeptName"]);

                    result.Add(DI);
                }
            }

            con.Close();

            return result;
        }


        [HttpPost]
        [Route("Update")]
        public int Update(Department DeptObj)
        {
            if (DeptObj.DeptID != 0)
            {
                con.Open();

                cmd = new SqlCommand("SP_Department", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Action", "UPDATE");
                cmd.Parameters.AddWithValue("@DeptID", DeptObj.DeptID);
                cmd.Parameters.AddWithValue("@DeptName", DeptObj.DeptName);
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
        public dynamic Delete(int DeptID)
        {
            con.Open();

            cmd = new SqlCommand("SP_Department", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Action", "DELETE");
            cmd.Parameters.AddWithValue("@DeptID", DeptID);
            cmd.ExecuteNonQuery();

            con.Close();

            return 1;
        }
    }
}
