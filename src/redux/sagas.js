import { call, put, select, takeEvery } from 'redux-saga/effects';

import { getNewAuth, getLogout } from '../firebase/authentication';
import { sendNewMassege } from '../firebase/requestFirebase';
import { getMassegeError } from './massegesSlice';
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

export function* workGetNewMassege(action) {
  const user = yield select((state) => state.user.user);
  const masseges = yield select((state) => state.masseges.masseges);
  try {
    yield call(() => sendNewMassege(action, user, masseges));
  } catch {
    yield put(getMassegeError('Error send massege'));
  }
}

export function* rootSaga() {
  yield takeEvery('user/getAuthetication', workGetUserAuth);
  yield takeEvery('user/getLogout', workGetLogout);
  yield takeEvery('masseges/getNewMassege', workGetNewMassege);
}

export default rootSaga;
