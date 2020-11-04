using AutoMapper;
using LYLAcademy.API.Dtos;
using LYLAcademy.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LYLAcademy.API.Helpers
{
    public class AutoMapperProfiles:Profile
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
