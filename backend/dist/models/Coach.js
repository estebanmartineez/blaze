"use strict";
// models/Coach.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const Team_1 = __importDefault(require("./Team"));
class Coach extends sequelize_1.Model {
}
Coach.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    teamId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: Team_1.default,
            key: 'teamId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Coach',
    tableName: 'coaches',
});
exports.default = Coach;
//# sourceMappingURL=Coach.js.map