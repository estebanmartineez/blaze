'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      teamId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      badge: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });

    await queryInterface.createTable('players', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      playerId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isCaptain: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      playerRating: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      teamId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'teamId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });

    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      matchId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      countryId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      countryName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      matchDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      matchTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homeTeamId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homeTeamName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homeTeamScore: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      awayTeamId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      awayTeamName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      awayTeamScore: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      stadium: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      referee: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      homeBadge: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      awayBadge: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      goalScorer: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: [],
      },
      cards: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: [],
      },
      substitutions: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: {},
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });

    await queryInterface.createTable('coaches', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      teamId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'teams', // Assuming your Team model is named 'Team'
          key: 'teamId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matches');
    await queryInterface.dropTable('players');
    await queryInterface.dropTable('coaches');
    await queryInterface.dropTable('teams');
  },
};
