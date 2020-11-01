using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LYLAcademy.API.Models
{
    public class Participant
    {
      
        public int ParticipantId { get; set; }
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
