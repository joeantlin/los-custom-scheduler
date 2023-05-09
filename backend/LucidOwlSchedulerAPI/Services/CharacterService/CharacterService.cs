using System;
using LucidOwlSchedulerAPI.Data;
using LucidOwlSchedulerAPI.Models;

namespace LucidOwlSchedulerAPI.Services.CharacterService
{
    public class CharacterService : ICharacterService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;

        public CharacterService(IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<ServiceResponse<List<GetCharacterDTO>>> AddCharacter(AddCharacterDTO newCharacter)
        {
            var serviceResponse = new ServiceResponse<List<GetCharacterDTO>>();
            var character = _mapper.Map<Character>(newCharacter);

            _context.Character.Add(character);
            await _context.SaveChangesAsync();

            serviceResponse.Data = await _context.Character.Select(c => _mapper.Map<GetCharacterDTO>(c)).ToListAsync();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetCharacterDTO>>> GetAllCharacters(int userId)
        {
            var serviceResponse = new ServiceResponse<List<GetCharacterDTO>>();
            var dbCharacters = await _context.Character.Where(c => c.User!.Id == userId).ToListAsync();

            serviceResponse.Data = dbCharacters.Select(c => _mapper.Map<GetCharacterDTO>(c)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetCharacterDTO>> GetCharacterById(int id)
        {
            var serviceResponse = new ServiceResponse<GetCharacterDTO>();
            var dbCharacter = await _context.Character.FirstOrDefaultAsync(i => i.Id == id);

            serviceResponse.Data = _mapper.Map<GetCharacterDTO>(dbCharacter);

            if (dbCharacter is null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "Character not found";
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetCharacterDTO>> UpdateCharacter(UpdateCharacterDTO updatedCharacter)
        {
            var serviceResponse = new ServiceResponse<GetCharacterDTO>();

            try
            {
                var dbCharacter = await _context.Character.FirstOrDefaultAsync(i => i.Id == updatedCharacter.Id);

                if (dbCharacter is null)
                    throw new Exception($"Character with Id '{updatedCharacter.Id}' not found.");

                dbCharacter = _mapper.Map(updatedCharacter, dbCharacter);
                await _context.SaveChangesAsync();

                serviceResponse.Data = _mapper.Map<GetCharacterDTO>(dbCharacter);
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetCharacterDTO>>> DeleteCharacter(int id)
        {
            var serviceResponse = new ServiceResponse<List<GetCharacterDTO>>();

            try
            {
                var dbCharacter = await _context.Character.FirstOrDefaultAsync(i => i.Id == id);

                if (dbCharacter is null)
                    throw new Exception($"Character with Id '{id}' not found.");

                _context.Character.Remove(dbCharacter);
                await _context.SaveChangesAsync();

                serviceResponse.Data = await _context.Character.Select(c => _mapper.Map<GetCharacterDTO>(c)).ToListAsync();
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }
    }
}