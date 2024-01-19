import Coach, {CoachAttributes} from '../models/Coach';
import {Optional} from 'sequelize';

interface CoachCreationAttributes extends Optional<CoachAttributes, 'id'> {}

class CoachRepository {
  private readonly model: typeof Coach;

  constructor(model: typeof Coach) {
    this.model = model;
  }

  async create(entity: Partial<CoachAttributes>): Promise<CoachAttributes> {
    try {
      const createdCoach = await this.model.create(entity as CoachCreationAttributes);
      return createdCoach.toJSON() as CoachAttributes;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error creating a coach: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async findById(id: number): Promise<CoachAttributes | null> {
    try {
      const coach = await this.model.findByPk(id);
      return coach ? (coach.toJSON() as CoachAttributes) : null;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error finding coach by ID: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async update(entity: Partial<CoachAttributes>): Promise<void> {
    try {
      if (!entity.id) {
        throw new Error('Entity must have an ID for update');
      }
      await this.model.update(entity as CoachAttributes, {where: {id: entity.id}});
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error updating coach: ${error.message}`);
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
        throw new Error(`Error deleting coach: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}

export default CoachRepository;
