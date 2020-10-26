using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using LYLAcademy.API.Data;
using LYLAcademy.API.Dtos;
using LYLAcademy.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace LYLAcademy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthRepository _authRepository;
        private IConfiguration _configuration { get; }
        public AuthController(IAuthRepository authRepository,IConfiguration configuration)
        {
            _authRepository = authRepository;
            _configuration = configuration;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserForRegisterDto userForRegisterDto)
        {
            if (await _authRepository.UserExists(userForRegisterDto.Name)) {
                ModelState.AddModelError("UserName","UserName already exists");
            }
            if (!ModelState.IsValid) { return BadRequest(ModelState); }
            var userToCreate = new User { 
                Name = userForRegisterDto.Name,
                Password = userForRegisterDto.Password,
                //pass must be hashed later not move here todo :this is not the bestpratice
                IsAdmin = userForRegisterDto.IsAdmin,
                IsStudent = userForRegisterDto.IsStudent,
                IsTeacher = userForRegisterDto.IsTeacher           
            };

            var createdUser = await _authRepository.Register(userToCreate,userForRegisterDto.Password);
            return StatusCode(201);
          
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserForLoginDto userForLoginDto)
        {
            var user = await _authRepository.Login(userForLoginDto.Name,userForLoginDto.Password);
            if (user == null)
            {
                return Unauthorized();
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration.GetSection("AppSettings:Token").Value);

            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(new Claim[] { 
                    new Claim(ClaimTypes.NameIdentifier,user.UserId.ToString()),
                    new Claim(ClaimTypes.Name,user.Name)
                
                }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials( new SymmetricSecurityKey(key)
                ,SecurityAlgorithms.HmacSha512Signature)
            
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            return Ok(tokenString);

        }
    }
}
