import styled from 'styled-components';
import Button from './Button';
import ok from '../img/ok.png';
import error from '../img/false.png';

import { useDispatch, useSelector } from 'react-redux';
import { getResponseCheck } from '../redux/quizSlice';

const Container = styled.div`
  width: 400px;
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
  height: 40px;
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
  const dispatch = useDispatch();
  const activeQuestionVariants = useSelector(
    (state) => state.quiz.activeQuestionVariants
  );
  const activeQuestion = useSelector((state) => state.quiz.activeQuestion);
  const waitingResponse = useSelector((state) => state.quiz.waitingResponse);
  const answers = useSelector((state) => state.quiz.answers);

  const responseCheck = (answer) => {
    dispatch(getResponseCheck(answer));
  };

  return (
    <Container>
      <Result>
        {answers &&
          answers.map((el, index) => (
            <img
              src={el.result ? ok : error}
              alt="ok"
              height="30px"
              key={index}
            />
          ))}
      </Result>
      {activeQuestion && (
        <List>
          <Question>{activeQuestion}</Question>
          {activeQuestionVariants.map((element, index) => (
            <Button
              disabled={!waitingResponse}
              textButton={element}
              nameButton="question"
              key={index}
              getClick={responseCheck}
            />
          ))}
        </List>
      )}
    </Container>
  );
};

export default ListQuestions;
