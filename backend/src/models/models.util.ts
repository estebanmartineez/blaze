import Team from './Team';
import Player from './Player';
import Coach from './Coach';

export const setModelRelations = () => {
  Player.belongsTo(Team, {
    foreignKey: 'teamId',
    as: 'team',
  });

  Coach.belongsTo(Team, {
    foreignKey: 'teamId',
    as: 'team',
  });

  Team.hasMany(Player, {
    sourceKey: 'teamId',
    foreignKey: 'teamId',
    as: 'players',
  });

  Team.hasMany(Coach, {
    sourceKey: 'teamId',
    foreignKey: 'teamId',
    as: 'coaches',
  });
};
