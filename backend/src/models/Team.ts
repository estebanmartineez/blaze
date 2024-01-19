import {DataTypes, Model, Optional} from 'sequelize';
import {sequelize} from '../config/database';
import Player from './Player';
import Coach from './Coach';

export interface TeamAttributes {
  id: number;
  teamId: string;
  name: string;
  country: string;
  badge: string;
}

interface TeamCreationAttributes extends Optional<TeamAttributes, 'id'> {}

class Team extends Model<TeamAttributes, TeamCreationAttributes> implements TeamAttributes {
  public id!: number;
  public teamId!: string;
  public name!: string;
  public country!: string;
  public badge!: string;

  public players?: Player[];
  public coaches?: Coach[];
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    teamId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    badge: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Team',
    tableName: 'teams',
  },
);

export default Team;
