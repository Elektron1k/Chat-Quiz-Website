import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import MainHeader from './components/MainHeader';
import { auth } from './firebase/firebase';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import {
  getTestActiveUserError,
  getTestActiveUserSuccess,
} from './redux/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getTestActiveUserSuccess(user));
      } else {
        dispatch(getTestActiveUserError(''));
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
