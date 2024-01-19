import {all} from 'redux-saga/effects';
import {watchLogin} from './authSaga';
import {watchFetchMatches, watchFetchPlayers, teamSaga} from './teamSaga';

export default function* rootSaga() {
  yield all([watchLogin(), watchFetchMatches(), watchFetchPlayers(), teamSaga()]);
}
