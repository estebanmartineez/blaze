"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setModelRelations = void 0;
const Team_1 = __importDefault(require("./Team"));
const Player_1 = __importDefault(require("./Player"));
const Coach_1 = __importDefault(require("./Coach"));
const setModelRelations = () => {
    Player_1.default.belongsTo(Team_1.default, {
        foreignKey: 'teamId',
        as: 'team',
    });
    Coach_1.default.belongsTo(Team_1.default, {
        foreignKey: 'teamId',
        as: 'team',
    });
    Team_1.default.hasMany(Player_1.default, {
        sourceKey: 'teamId',
        foreignKey: 'teamId',
        as: 'players',
    });
    Team_1.default.hasMany(Coach_1.default, {
        sourceKey: 'teamId',
        foreignKey: 'teamId',
        as: 'coaches',
    });
};
exports.setModelRelations = setModelRelations;
//# sourceMappingURL=models.util.js.map