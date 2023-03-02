import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getQuestions } from '../api/requestAPI';

import { getNewAuth, getLogout } from '../firebase/authentication';
import {
  sendNewMassege,
  sendActiveUser,
  sendUserUnready,
  sendUsersAnswers,
} from '../firebase/requestFirebase';
import { getMassegeError } from './massegesSlice';
import {
  getActiveQuestion,
  getFinishedQuid,
  getQuestionsSuccess,
  getQuizError,
  getResponseCheck,
  getUserReadySuccess,
  getUserUnreadySuccess,
} from './quizSlice';
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

export function* workGetUserReady() {
  const user = yield select((state) => state.user.user);
  try {
    yield call(() => sendActiveUser(user));
    yield put(
      getUserReadySuccess({ userName: user.displayName, userId: user.uid })
    );
  } catch {
    yield put(getQuizError('Error send user to Quiz'));
  }
}

export function* workGetUserUnready() {
  const user = yield select((state) => state.user.user);
  try {
    yield call(() => sendUserUnready(user));
    yield put(getUserUnreadySuccess());
  } catch {
    yield put(getQuizError('Error send user to Quiz'));
  }
}

export function* workGetQuestions() {
  try {
    const data = yield call(() => getQuestions());
    yield put(getQuestionsSuccess(data.results));
    yield put(getActiveQuestion());
  } catch {}
}

export function* workGetCheck(action) {
  const numberQuestion = yield select((state) => state.quiz.numberQuestion);
  const questions = yield select((state) => state.quiz.questions);

  const activeUserId = yield select((state) => state.user.activeUserId);

  yield put(getResponseCheck(action.payload));
  const answers = yield select((state) => state.quiz.answers);
  if (numberQuestion < questions.length) {
    yield put(getActiveQuestion());
  } else {
    yield call(() => sendUsersAnswers(answers, activeUserId));
    yield put(getFinishedQuid());
  }
}

export function* rootSaga() {
  yield takeEvery('user/getAuthetication', workGetUserAuth);
  yield takeEvery('user/getLogout', workGetLogout);
  yield takeEvery('masseges/getNewMassege', workGetNewMassege);
  yield takeEvery('quiz/getUserReady', workGetUserReady);
  yield takeEvery('quiz/getUserUnready', workGetUserUnready);
  yield takeEvery('quiz/getQuestions', workGetQuestions);
  yield takeEvery('quiz/getCheck', workGetCheck);
}

export default rootSaga;
