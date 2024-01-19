"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_controller_1 = __importDefault(require("../controllers/team.controller"));
const router = express_1.default.Router();
router.get('/', team_controller_1.default.getTeams);
router.get('/:teamId/matches', team_controller_1.default.getMatchesByTeam);
router.get('/:teamId/players', team_controller_1.default.getPlayersByTeam);
exports.default = router;
//# sourceMappingURL=team.routes.js.map