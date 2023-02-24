import { call, put, takeEvery } from 'redux-saga/effects';

import { getNewAuth } from '../firebase/authentication';
import {
  getAuthError,
  getAuthSuccess,
  getLogout,
  getLogoutSuccess,
} from './userSlice';

export function* workGetUserAuth() {
  try {
    const data = yield call(() => getNewAuth());
    yield put(getAuthSuccess(data));
  } catch {
    yield put(getAuthError('Error authetication'));
  }
}

export function* workGetLogout() {
  try {
    yield call(() => getLogout());
    yield put(getLogoutSuccess());
  } catch {
    yield put(getAuthError('Error logout'));
  }
}

export function* rootSaga() {
  yield takeEvery('user/getAuthetication', workGetUserAuth);
  yield takeEvery('user/getLogout', workGetLogout);
}

export default rootSaga;
