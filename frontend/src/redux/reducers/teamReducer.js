import {
  FETCH_MATCHES_SUCCESS,
  FETCH_TEAMS_FAILURE,
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  SELECT_TEAM,
  SET_TEAMS,
} from '../actions/teamActions';
import {FETCH_PLAYERS_SUCCESS} from '../actions/playerActions';

const initialState = {
  teams: [],
  selectedTeam: null,
  matches: [],
  players: [],
  loading: false,
  error: null,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_TEAMS_SUCCESS:
      return {...state, loading: false, teams: action.payload, error: null};
    case FETCH_PLAYERS_SUCCESS:
      return {...state, loading: false, players: action.payload, error: null};
    case FETCH_MATCHES_SUCCESS:
      return {...state, loading: false, matches: action.payload, error: null};
    case FETCH_TEAMS_FAILURE:
      return {...state, loading: false, error: action.payload};
    case SELECT_TEAM:
      return {...state, selectedTeam: action.payload};
    case SET_TEAMS:
      return {...state, teams: action.payload};

    default:
      return state;
  }
};

export default teamReducer;
