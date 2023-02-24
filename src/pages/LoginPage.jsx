import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/google.png';
import { getAuthetication } from '../redux/userSlice';

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 600px;
  height: 200px;
  background: rgb(35, 35, 39);
  border-radius: 10px;
`;

const Button = styled.button`
  width: 550px;
  margin: 80px 25px;
  height: 40px;
  background: rgb(35, 35, 39);
  border: rgb(252, 241, 49) solid 2px;
  color: #fff;
  border-radius: 2px;
  font-size: 1.2rem;
  text-align: left;
  padding: 0 10px;
  cursor: pointer;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuthentication = useSelector((store) => store.user.isAuthentication);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthentication) {
      navigate('/');
    }
  }, [isAuthentication, navigate]);

  return (
    <ContainerFlex>
      <Container>
        <Button onClick={() => dispatch(getAuthetication())}>
          <img src={logo} width="20px" alt="google" />
          <span style={{ marginLeft: '180px' }}>Login with Google</span>
        </Button>
      </Container>
    </ContainerFlex>
  );
};

export default LoginPage;
