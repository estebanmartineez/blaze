import {Request, Response} from 'express';
import TeamService from '../services/team.service';
import {handleError} from '../helpers/helpers';

const TeamController = {
  async getMatchesByTeam(req: Request, res: Response) {
    try {
      const {teamId} = req.params;
      const matches = await TeamService.getMatchesByTeam(teamId);
      return res.status(200).json(matches);
    } catch (error) {
      handleError(res, 'Error retrieving matches', error as Error);
    }
  },

  async getPlayersByTeam(req: Request, res: Response) {
    try {
      const {teamId} = req.params;
      const players = await TeamService.getPlayersByTeam(teamId);
      return res.status(200).json(players);
    } catch (error) {
      handleError(res, 'Error retrieving matches', error as Error);
    }
  },

  async getTeams(req: Request, res: Response) {
    try {
      const teams = await TeamService.getTeams();
      return res.status(200).json(teams);
    } catch (error) {
      handleError(res, 'Error retrieving matches', error as Error);
    }
  },
};

export default TeamController;
