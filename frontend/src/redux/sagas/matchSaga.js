import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {FETCH_MATCHES_REQUEST, fetchMatchesSuccess, fetchMatchesFailure} from '../actions/matchActions';

function* fetchMatches({teamId}) {
  try {
    const response = yield call(axios.get, `http://localhost:4000/${teamId}/matches`);
    yield put(fetchMatchesSuccess(response.data));
  } catch (error) {
    yield put(fetchMatchesFailure(error.message));
  }
}

export function* watchFetchMatches() {
  yield takeLatest(FETCH_MATCHES_REQUEST, fetchMatches);
}
