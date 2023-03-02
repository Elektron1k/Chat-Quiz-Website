import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import massegesSlice from './massegesSlice';
import quizSlice from './quizSlice';
import { rootSaga } from './sagas';
import userSlice from './userSlice';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    user: userSlice,
    masseges: massegesSlice,
    quiz: quizSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
