using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LYLAcademy.API.Helpers
{
    public static class JwtExtensiom
    {
        public static void AddApplicationError(this HttpResponse response,string message) {
            response.Headers.Add("Application-Error",message);
            response.Headers.Add("Access-Control-Allow-Origin","*");
            response.Headers.Add("Access-Control-Expose-Header", "Application-Error");
        }
    }
}
