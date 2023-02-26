import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Chat from '../components/Chat';
import ListQuestions from '../components/ListQuestions';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 100vh;
`;

const MainPage = () => {
  const isAuthentication = useSelector((store) => store.user.isAuthentication);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthentication) {
      navigate('/login');
    }
  }, [isAuthentication, navigate]);

  return (
    <Container>
      <ListQuestions />
      <Chat />
    </Container>
  );
};

export default MainPage;
