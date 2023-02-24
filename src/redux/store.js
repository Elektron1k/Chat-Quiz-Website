import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import userSlice from './userSlice';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
