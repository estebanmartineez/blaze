import Team, {TeamAttributes} from '../models/Team';
import {Op, Optional} from 'sequelize';
import Player from '../models/Player';
import Match from '../models/Match';

interface TeamCreationAttributes extends Optional<TeamAttributes, 'id'> {}

const TeamRepository = {
  async create(entity: Partial<TeamAttributes>): Promise<TeamAttributes> {
    try {
      const createdTeam = await Team.create(entity as TeamCreationAttributes);
      return createdTeam.toJSON() as TeamAttributes;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error creating a team: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  },

  async findById(id: number): Promise<TeamAttributes | null> {
    try {
      const team = await Team.findByPk(id);
      return team ? (team.toJSON() as TeamAttributes) : null;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error finding team by ID: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  },

  async update(entity: Partial<TeamAttributes>): Promise<void> {
    try {
      if (!entity.id) {
        throw new Error('Entity must have an ID for update');
      }
      await Team.update(entity as TeamAttributes, {where: {id: entity.id}});
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error updating team: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await Team.destroy({where: {id}});
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error deleting team: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  },

  async getPlayersByTeam(teamId: string) {
    try {
      return await Player.findAll({where: {teamId}});
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error retrieving players for team: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  },

  async getMatchesByTeam(teamId: string) {
    try {
      return await Match.findAll({
        where: {
          [Op.or]: [{homeTeamId: teamId}, {awayTeamId: teamId}],
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error retrieving matches for team: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  },

  async getTeams() {
    try {
      return await Team.findAll();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error retrieving teams`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  },
};

export default TeamRepository;
