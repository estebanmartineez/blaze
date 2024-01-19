"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = __importDefault(require("../models/Team"));
const sequelize_1 = require("sequelize");
const Player_1 = __importDefault(require("../models/Player"));
const Match_1 = __importDefault(require("../models/Match"));
const TeamRepository = {
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdTeam = yield Team_1.default.create(entity);
                return createdTeam.toJSON();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error creating a team: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    },
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const team = yield Team_1.default.findByPk(id);
                return team ? team.toJSON() : null;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error finding team by ID: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    },
    update(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!entity.id) {
                    throw new Error('Entity must have an ID for update');
                }
                yield Team_1.default.update(entity, { where: { id: entity.id } });
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error updating team: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    },
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Team_1.default.destroy({ where: { id } });
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error deleting team: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    },
    getPlayersByTeam(teamId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Player_1.default.findAll({ where: { teamId } });
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error retrieving players for team: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    },
    getMatchesByTeam(teamId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Match_1.default.findAll({
                    where: {
                        [sequelize_1.Op.or]: [{ homeTeamId: teamId }, { awayTeamId: teamId }],
                    },
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error retrieving matches for team: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    },
    getTeams() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Team_1.default.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error retrieving teams`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    },
};
exports.default = TeamRepository;
//# sourceMappingURL=TeamRepository.js.map