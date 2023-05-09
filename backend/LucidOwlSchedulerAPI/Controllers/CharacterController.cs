using System;
using System.Security.Claims;
using LucidOwlSchedulerAPI.Models;
using LucidOwlSchedulerAPI.Services.CharacterService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LucidOwlSchedulerAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
	{
        private readonly ICharacterService _characterService;

        public CharacterController(ICharacterService characterService)
		{
            _characterService = characterService;
        }

        //[AllowAnonymous]
		[HttpGet]
		public async Task<ActionResult<ServiceResponse<List<GetCharacterDTO>>>> GetAllCharacters()
		{
            int userId = int.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)!.Value);
            return Ok(await _characterService.GetAllCharacters(userId));
		}

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetCharacterDTO>>> GetCharacter(int id)
        {
            return Ok(await _characterService.GetCharacterById(id));
        }

		[HttpPost]
		public async Task<ActionResult<ServiceResponse<List<GetCharacterDTO>>>> PostCharacter(AddCharacterDTO newCharacter)
		{

			return Ok(await _characterService.AddCharacter(newCharacter));
		}

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<GetCharacterDTO>>>> PutCharacter(UpdateCharacterDTO updatedCharacter)
        {
            var response = await _characterService.UpdateCharacter(updatedCharacter);

            if (response.Data is null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<List<GetCharacterDTO>>>> DeleteCharacter(int id)
        {
            var response = await _characterService.DeleteCharacter(id);

            if (response.Data is null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
    }
}

