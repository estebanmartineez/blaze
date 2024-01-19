import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {
  FETCH_TEAMS_REQUEST,
  fetchMatchesSuccess,
  fetchPlayersSuccess,
  fetchTeamsFailure,
  fetchTeamsSuccess,
} from '../actions/teamActions';
import axios from 'axios';
import {FETCH_PLAYERS_REQUEST} from '../actions/playerActions';
import {FETCH_MATCHES_REQUEST} from '../actions/matchActions';

function* fetchMatchesAsync({payload}) {
  console.log('asdafsasdas', payload);
  const response = yield call(axios.get, `http://localhost:4000/teams/${payload}/matches`);
  yield put(fetchMatchesSuccess(response.data));
}

function* fetchPlayersAsync({payload}) {
  const players = yield call(axios.get, `http://localhost:4000/teams/${payload.teamId}/players`);
  yield put(fetchPlayersSuccess(players.data));
}

export function* watchFetchMatches() {
  yield takeLatest(FETCH_MATCHES_REQUEST, fetchMatchesAsync);
}

export function* watchFetchPlayers() {
  yield takeLatest(FETCH_PLAYERS_REQUEST, fetchPlayersAsync);
}

function* fetchTeams() {
  try {
    const response = yield call(axios.get, 'http://localhost:4000/teams');
    yield put(fetchTeamsSuccess(response.data));
  } catch (error) {
    yield put(fetchTeamsFailure(error.message));
  }
}

export function* teamSaga() {
  yield takeEvery(FETCH_TEAMS_REQUEST, fetchTeams);
}
