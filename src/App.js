import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  console.log(user);

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
