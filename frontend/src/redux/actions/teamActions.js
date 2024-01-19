export const FETCH_TEAMS_REQUEST = 'FETCH_TEAMS_REQUEST';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const SET_TEAMS = 'SET_TEAMS';
export const SELECT_TEAM = 'SELECT_TEAM';

export const fetchMatchesSuccess = (matches) => {
  return {
    type: 'FETCH_MATCHES_SUCCESS',
    payload: matches,
  };
};

export const fetchPlayersSuccess = (players) => {
  return {
    type: FETCH_PLAYERS_SUCCESS,
    payload: players,
  };
};
export const fetchTeamsRequest = () => ({
  type: FETCH_TEAMS_REQUEST,
});

export const fetchTeamsSuccess = (data) => ({
  type: FETCH_TEAMS_SUCCESS,
  payload: data,
});

export const fetchTeamsFailure = (error) => ({
  type: FETCH_TEAMS_FAILURE,
  payload: error,
});

export const setTeams = (teams) => ({type: SET_TEAMS, payload: teams});
export const selectTeam = (teamId) => ({type: 'TEAM_SELECTED', payload: teamId});

export const fetchTeams = () => ({type: 'FETCH_TEAMS'});
