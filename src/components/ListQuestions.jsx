import styled from 'styled-components';
import Button from './Button';
import ok from '../img/ok.png';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 100px 15px;
`;

const Result = styled.div`
  width: 100%;
  height: 40px;
  background: #466;
  margin: 30px 0;
`;

const List = styled.div`
  margin: 50px 0;
  padding: 50px 20px 30px;
  background: rgb(35, 35, 39);
  border: rgb(86, 186, 183) solid 1px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 2px #000000;
`;

const Question = styled.p`
  padding: 30px 20px;
  margin-bottom: 80px;
  color: #fff;
  padding: 0 20px;
`;

const ListQuestions = () => {
  return (
    <Container>
      <Result>
        <img src={ok} alt="ok" height="30px" />
      </Result>
      <List>
        <Question>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo harum
          nam nostrum dolores modi quasi quam praesentium voluptatem adipisci
          saepe.
        </Question>
        <Button textButton="0.1m" nameButton="question" />
        <Button textButton="100m" nameButton="question" />
        <Button textButton="10m" nameButton="question" />
        <Button textButton="1m" nameButton="question" />
      </List>
    </Container>
  );
};

export default ListQuestions;
