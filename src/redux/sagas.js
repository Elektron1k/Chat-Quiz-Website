import { call, put, takeEvery } from 'redux-saga/effects';

import { getNewAuth, getLogout } from '../firebase/authentication';
import { getAuthError, getAuthSuccess, getLogoutSuccess } from './userSlice';

export function* workGetUserAuth() {
  try {
    yield call(() => getNewAuth());
    yield put(getAuthSuccess());
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
