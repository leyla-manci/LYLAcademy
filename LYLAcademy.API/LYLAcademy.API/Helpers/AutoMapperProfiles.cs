using AutoMapper;
using LYLAcademy.API.Dtos;
using LYLAcademy.API.Models;

namespace LYLAcademy.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Student, StudentDto>();
            CreateMap<User, UserNameDto>();
            CreateMap<ParticipantAddDto, Participant>();
            CreateMap<CalendarAddDto, Calendar>();
        }
    }
}
