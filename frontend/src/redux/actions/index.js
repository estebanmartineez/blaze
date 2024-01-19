// Import action type constants if needed
import {FETCH_MATCHES, FETCH_PLAYERS} from './actionTypes';

export const fetchMatches = (teamId) => ({
  type: FETCH_MATCHES,
  payload: {teamId},
});

export const fetchPlayers = (teamId) => ({
  type: FETCH_PLAYERS,
  payload: {teamId},
});
