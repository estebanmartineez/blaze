// models/Coach.ts

import {DataTypes, Model, Optional} from 'sequelize';
import {sequelize} from '../config/database';
import Team from './Team';

export interface CoachAttributes {
  id: number;
  name: string;
  country: string;
  age: string;
  teamId: string;
}

interface CoachCreationAttributes extends Optional<CoachAttributes, 'id'> {}

class Coach extends Model<CoachAttributes, CoachCreationAttributes> implements CoachAttributes {
  public id!: number;
  public name!: string;
  public country!: string;
  public age!: string;
  public teamId!: string;
}

Coach.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teamId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Team,
        key: 'teamId',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: 'Coach',
    tableName: 'coaches',
  },
);

export default Coach;
