using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LYLAcademy.API.Data;
using LYLAcademy.API.Models;

namespace LYLAcademy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalendarsController : ControllerBase
    {
        private readonly DataContext _context;

        public CalendarsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Calendars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Calendar>>> GetCalendars()
        {
            return await _context.Calendars.Include(c=>c.Course).Include(t=>t.Teacher).ToListAsync();
        }

        // GET: api/Calendars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Calendar>> GetCalendar(int id)
        {
            var calendar = await _context.Calendars.Include(c => c.Course).Include(t => t.Teacher).FirstOrDefaultAsync(calendar=> calendar.CalendarId == id);

            if (calendar == null)
            {
                return NotFound();
            }

            return calendar;
        }

        // GET: api/Calendars/byParticipant/1
        [HttpGet("byParticipant/{id}")]
        public async Task<ActionResult<IEnumerable<Calendar>>> GetCalendarByParticipant(int id)
        {
            
            var calIdList =  _context.Participants.Where(part => part.StudentId == id).Select(x=>x.CalendarId).ToList();
            if(calIdList!= null)
            {
                var calendarList = await _context.Calendars
                    .Include(c => c.Course)
                    .Include(t => t.Teacher)
                    .Include(p=>p.ParticipantList)
                    .Where(calendar =>
                    calIdList.Contains(calendar.CalendarId)).ToListAsync();

                if (calendarList == null)
                {
                    return NotFound();
                }
                
                for (int i = 0; i < calendarList.Count();i++)
                {
                    if(calendarList[i].ParticipantList == null) {

                        Participant participant = _context.Participants.FirstOrDefault(part => part.StudentId == id
                      && part.CalendarId == calendarList[i].CalendarId);
                        if (participant != null)
                        {
                            calendarList[i].ParticipantList.Clear();
                            calendarList[i].ParticipantList.Add(participant);
                        }
                    }
                    if (calendarList[i].Teacher.TeacherId == 0)
                    {

                        Teacher teacher = _context.Teachers.FirstOrDefault(part => part.TeacherId == calendarList[i].TeacherId);
                        if (teacher != null)
                        {
                            calendarList[i].Teacher = teacher;
                        }
                    }
                    if (calendarList[i].Course.CourseId == 0)
                    {

                        Course course = _context.Courses.FirstOrDefault(part => part.CourseId == calendarList[i].CourseId);
                        if (course != null)
                        {
                            calendarList[i].Course = course;
                        }
                    }




                }

             
                return calendarList;
            }

            return null;

            
        }
        // GET: api/Calendars/toJoin/1
        [HttpGet("toJoin/{id}")]
        public async Task<ActionResult<IEnumerable<Calendar>>> GetCalendarToJoin(int id)
        {

            var calIdList = _context.Participants.Where(part => part.StudentId == id).Select(x => x.CalendarId).ToList();
            if (calIdList != null)
            {
                var calendarList = await _context.Calendars
                    .Include(c => c.Course)
                    .Include(t => t.Teacher).Where(calendar =>
                    !calIdList.Contains(calendar.CalendarId)).ToListAsync();

                if (calendarList == null)
                {
                    return NotFound();
                }

                for (int i = 0; i < calendarList.Count(); i++)
                {
                    
                    if (calendarList[i].Teacher.TeacherId == 0)
                    {

                        Teacher teacher = _context.Teachers.FirstOrDefault(part => part.TeacherId == calendarList[i].TeacherId);
                        if (teacher != null)
                        {
                            calendarList[i].Teacher = teacher;
                        }
                    }
                    if (calendarList[i].Course.CourseId == 0)
                    {

                        Course course = _context.Courses.FirstOrDefault(part => part.CourseId == calendarList[i].CourseId);
                        if (course != null)
                        {
                            calendarList[i].Course = course;
                        }
                    }




                }



                return calendarList;
            }

            return null;


        }


        // PUT: api/Calendars/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCalendar(int id, Calendar calendar)
        {
            if (id != calendar.CalendarId)
            {
                return BadRequest();
            }

            _context.Entry(calendar).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CalendarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Calendars
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Calendar>> PostCalendar(Calendar calendar)
        {
            _context.Calendars.Add(calendar);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCalendar", new { id = calendar.CalendarId }, calendar);
        }

        // DELETE: api/Calendars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Calendar>> DeleteCalendar(int id)
        {
            var calendar = await _context.Calendars.FindAsync(id);
            if (calendar == null)
            {
                return NotFound();
            }

            _context.Calendars.Remove(calendar);
            await _context.SaveChangesAsync();

            return calendar;
        }

        private bool CalendarExists(int id)
        {
            return _context.Calendars.Any(e => e.CalendarId == id);
        }
    }
}
