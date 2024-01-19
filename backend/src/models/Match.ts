import {DataTypes, Model, Optional} from 'sequelize';
import {sequelize} from '../config/database';

interface Score {
  time: string;
  score: string;
  homeScorer: string;
  awayScorer: string;
  infoTime: string;
}

interface Card {
  time: string;
  homeFault: string;
  cardType: string;
  awayFault: string;
  infoTime: string;
}

interface SubstitutionAttribute {
  time: string;
  substitution: string;
}

interface Substitutions {
  home: SubstitutionAttribute[];
  away: SubstitutionAttribute[];
}

export interface MatchAttributes {
  id?: number;
  matchId: string;
  countryId: string;
  countryName: string;
  matchDate: string;
  matchTime: string;
  homeTeamId: string;
  homeTeamName: string;
  homeTeamScore: string;
  awayTeamId: string;
  awayTeamName: string;
  awayTeamScore: string;
  stadium: string;
  referee: string;
  homeBadge: string;
  awayBadge: string;
  goalScorer: Score[];
  cards: Card[];
  substitutions?: Substitutions;
}

interface MatchCreationAttributes extends Optional<MatchAttributes, 'id'> {}

class Match extends Model<MatchAttributes, MatchCreationAttributes> implements MatchAttributes {
  public id!: number;
  public matchId!: string;
  public countryId!: string;
  public countryName!: string;
  public matchDate!: string;
  public matchTime!: string;
  public homeTeamId!: string;
  public homeTeamName!: string;
  public homeTeamScore!: string;
  public awayTeamId!: string;
  public awayTeamName!: string;
  public awayTeamScore!: string;
  public stadium!: string;
  public referee!: string;
  public homeBadge!: string;
  public awayBadge!: string;
  public goalScorer!: Score[];
  public cards!: Card[];
  public substitutions!: Substitutions;
}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    matchId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    countryId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    matchDate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    matchTime: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    homeTeamId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    homeTeamName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    homeTeamScore: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    awayTeamId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    awayTeamName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    awayTeamScore: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    stadium: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    referee: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    homeBadge: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    awayBadge: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    goalScorer: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
    },
    cards: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
    },
    substitutions: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {},
    },
  },
  {
    sequelize,
    modelName: 'Match',
    tableName: 'matches',
  },
);

export default Match;
