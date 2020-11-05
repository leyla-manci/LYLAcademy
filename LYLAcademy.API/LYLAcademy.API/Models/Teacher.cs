namespace LYLAcademy.API.Models
{
    public class Teacher
    {
        public Teacher()
        {
            // CalendarList = new List<Calendar>();
        }
        public int TeacherId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string UserName { get; set; }
        public string Qualification { get; set; }
        public string CompBranch { get; set; }
        public int IsDelete { get; set; }

        // public List<Calendar> CalendarList { get; set; }

    }
}
