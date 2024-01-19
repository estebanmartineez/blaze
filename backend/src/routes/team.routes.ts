import express from 'express';
import teamController from '../controllers/team.controller';

const router = express.Router();

router.get('/', teamController.getTeams);
router.get('/:teamId/matches', teamController.getMatchesByTeam);
router.get('/:teamId/players', teamController.getPlayersByTeam);

export default router;
