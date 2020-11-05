using System;

namespace LYLAcademy.API.Dtos
{
    public class ParticipantAddDto
    {
        public int StudentId { get; set; }
        public decimal Amount { get; set; }
        public decimal AmountPaid { get; set; }
        public decimal AmountRemain { get; set; }
        public int CalendarId { get; set; }
        public int IsDelete { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }

    }
}
