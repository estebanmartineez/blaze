"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Match extends sequelize_1.Model {
}
Match.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    matchId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    countryId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    countryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    matchDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    matchTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    homeTeamId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    homeTeamName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    homeTeamScore: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    awayTeamId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    awayTeamName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    awayTeamScore: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    stadium: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    referee: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    homeBadge: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    awayBadge: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    goalScorer: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
    },
    cards: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
    },
    substitutions: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
        defaultValue: {},
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Match',
    tableName: 'matches',
});
exports.default = Match;
//# sourceMappingURL=Match.js.map