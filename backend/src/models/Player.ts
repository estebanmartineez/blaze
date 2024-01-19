import {DataTypes, Model, Optional} from 'sequelize';
import {sequelize} from '../config/database';
import Team from './Team';

export interface PlayerAttributes {
  id: number;
  playerId: string;
  image: string;
  name: string;
  number: string;
  country: string;
  type: string;
  age: string;
  isCaptain: string;
  playerRating: string;
  teamId: string;
}

interface PlayerCreationAttributes extends Optional<PlayerAttributes, 'id'> {}

class Player extends Model<PlayerAttributes, PlayerCreationAttributes> implements PlayerAttributes {
  public id!: number;
  public playerId!: string;
  public image!: string;
  public name!: string;
  public number!: string;
  public country!: string;
  public type!: string;
  public age!: string;
  public isCaptain!: string;
  public playerRating!: string;
  public teamId!: string;

  public static associations: {
    team: any;
  };
}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCaptain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    playerRating: {
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
    modelName: 'Player',
    tableName: 'players',
  },
);

export default Player;
