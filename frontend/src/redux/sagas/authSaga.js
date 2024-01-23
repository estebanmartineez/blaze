import {call, put, takeLatest} from 'redux-saga/effects';
import {LOGIN_REQUEST, loginSuccess, loginFailure} from '../actions/authActions';
import axios from 'axios';

function* loginAsync({payload}) {
  try {
    const response = yield call(axios.post, 'http://localhost:4000/login', payload);
    const {token, user} = response.data;
    yield put(loginSuccess(token, user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginAsync);
}
