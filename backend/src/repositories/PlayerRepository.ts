import Player, {PlayerAttributes} from '../models/Player';
import {Optional} from 'sequelize';

interface PlayerCreationAttributes extends Optional<PlayerAttributes, 'id'> {}

class PlayerRepository {
  private readonly model: typeof Player;

  constructor(model: typeof Player) {
    this.model = model;
  }

  async create(entity: Partial<PlayerAttributes>): Promise<PlayerAttributes> {
    try {
      const createdPlayer = await this.model.create(entity as PlayerCreationAttributes);
      return createdPlayer.toJSON() as PlayerAttributes;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error creating a player: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async findById(id: number): Promise<PlayerAttributes | null> {
    try {
      const player = await this.model.findByPk(id);
      return player ? (player.toJSON() as PlayerAttributes) : null;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error finding player by ID: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async update(entity: Partial<PlayerAttributes>): Promise<void> {
    try {
      if (!entity.id) {
        throw new Error('Entity must have an ID for update');
      }
      await this.model.update(entity as PlayerAttributes, {where: {id: entity.id}});
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error updating player: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.model.destroy({where: {id}});
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error deleting player: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}

export default PlayerRepository;
