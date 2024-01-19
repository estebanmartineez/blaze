import {call, put, takeLatest} from 'redux-saga/effects';
import {LOGIN_REQUEST, loginSuccess, loginFailure} from '../actions/authActions';
import * as authApi from '../api/authApi';

function* loginAsync(action) {
  try {
    const user = yield call(authApi.login, action.payload);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginAsync);
}
