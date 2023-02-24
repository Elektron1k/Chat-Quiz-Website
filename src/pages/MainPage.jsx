import styled from 'styled-components';
import Chat from '../components/Chat';
import ListQuestions from '../components/ListQuestions';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainPage = () => {
  return (
    <Container>
      <ListQuestions />
      <Chat />
    </Container>
  );
};

export default MainPage;
