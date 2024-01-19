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
const team_service_1 = __importDefault(require("../services/team.service"));
const helpers_1 = require("../helpers/helpers");
const TeamController = {
    getMatchesByTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { teamId } = req.params;
                const matches = yield team_service_1.default.getMatchesByTeam(teamId);
                return res.status(200).json(matches);
            }
            catch (error) {
                (0, helpers_1.handleError)(res, 'Error retrieving matches', error);
            }
        });
    },
    getPlayersByTeam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { teamId } = req.params;
                const players = yield team_service_1.default.getPlayersByTeam(teamId);
                return res.status(200).json(players);
            }
            catch (error) {
                (0, helpers_1.handleError)(res, 'Error retrieving matches', error);
            }
        });
    },
    getTeams(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teams = yield team_service_1.default.getTeams();
                return res.status(200).json(teams);
            }
            catch (error) {
                (0, helpers_1.handleError)(res, 'Error retrieving matches', error);
            }
        });
    },
};
exports.default = TeamController;
//# sourceMappingURL=team.controller.js.map