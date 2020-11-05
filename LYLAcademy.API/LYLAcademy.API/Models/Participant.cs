using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace LYLAcademy.API.Models
{
    public class Participant
    {
        public Participant()
        {
            Student = new Student();
        }
        public int ParticipantId { get; set; }
        [ForeignKey("Student")]
        public int StudentId { get; set; }
        public Student Student { get; set; }

        public decimal Amount { get; set; }
        public decimal AmountPaid { get; set; }
        public decimal AmountRemain { get; set; }
        public int CalendarId { get; set; }
        public int IsDelete { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }



    }
}
