using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LYLAcademy.API.Models
{
    public class Calendar
    {
        public Calendar()
        {
            Course = new Course();
            Teacher = new Teacher();
        }
        public int CalendarId { get; set; }
        public int CourseId { get; set; }
        public int TeacherId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }     
        public string Year { get; set; }     
        public string CourseContent { get; set; }     
        public decimal Price { get; set; }     
        public int Status { get; set; }     
        public int IsDelete { get; set; }     
        public DateTime CreateDate { get; set; }     
        public DateTime UpdateDate { get; set; }
        public Course Course { get; set; }
        public Teacher Teacher { get; set; }

    }
}
