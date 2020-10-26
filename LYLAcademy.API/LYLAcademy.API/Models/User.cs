using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LYLAcademy.API.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public int IsStudent { get; set; }
        public int IsTeacher { get; set; }
        public int IsAdmin { get; set; }
        public int IsDelete { get; set; } 

    }
}
