import { Outlet } from 'react-router';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const Header = styled.header`
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
  return (
    <Container>
      <Header>
        <H1>Q</H1>
        <Button textButton="Logout" nameButton="logout" />
      </Header>
      <Outlet />
    </Container>
  );
};

export default MainHeader;
