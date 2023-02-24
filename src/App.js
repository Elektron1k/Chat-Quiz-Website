import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import MainHeader from './components/MainHeader';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  const user = useSelector((store) => store.user);
  console.log(user);
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
