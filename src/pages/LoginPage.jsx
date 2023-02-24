import styled from 'styled-components';
import logo from '../img/google.png';

const Container = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 400px;

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
  return (
    <Container>
      <Button>
        <img src={logo} width="20px" alt="google" />
        <span style={{ marginLeft: '180px' }}>Login with Google</span>
      </Button>
    </Container>
  );
};

export default LoginPage;
