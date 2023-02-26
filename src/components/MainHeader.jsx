import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { getLogout } from '../redux/userSlice';
import Button from './Button';

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const Header = styled.header`
  z-index: 1;
  position: fixed;
  background: rgb(35, 35, 39);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
  padding: 10px 30px;
  font-family: 'Skranji', cursive;
  font-size: 4rem;
  color: #fff;
`;

const MainHeader = () => {
  const dispatch = useDispatch();
  const isAuthentication = useSelector((store) => store.user.isAuthentication);

  const logOut = () => {
    dispatch(getLogout());
  };

  return (
    <Container>
      <Header>
        <H1>Q</H1>
        {isAuthentication && (
          <Button textButton="Logout" nameButton="logout" getClick={logOut} />
        )}
      </Header>
      <Outlet />
    </Container>
  );
};

export default MainHeader;
