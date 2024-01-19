import TeamRepository from '../repositories/TeamRepository';

const TeamService = {
  async getMatchesByTeam(teamId: string) {
    return await TeamRepository.getMatchesByTeam(teamId);
  },

  async getPlayersByTeam(teamId: string) {
    return await TeamRepository.getPlayersByTeam(teamId);
  },

  async getTeams() {
    return await TeamRepository.getTeams();
  },
};

export default TeamService;
