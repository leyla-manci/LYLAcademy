using LYLAcademy.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LYLAcademy.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Calendar> Calendars { get; set; }
        public DbSet<Participant> Participants { get; set; }

    }
}
