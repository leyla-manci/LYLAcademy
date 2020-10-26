using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LYLAcademy.API.Dtos
{
    public class UserForRegisterDto
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public int IsStudent { get; set; }
        public int IsTeacher { get; set; }
        public int IsAdmin { get; set; }
    }
}
