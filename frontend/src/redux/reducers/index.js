import {combineReducers} from 'redux';
import authReducer from './authReducer';
import teamReducer from './teamReducer';
import matchReducer from './matchReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  team: teamReducer,
  match: matchReducer,
  player: playerReducer,
});

export default rootReducer;
