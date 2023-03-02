import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  getQuestions,
  getStartQuiz,
  getUserReady,
  getUserUnready,
} from '../redux/quizSlice';
import ListQuestions from './ListQuestions';

import Button from './Button';
import { useEffect } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/firebase';
import Results from './Results';

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TextQuestion = styled.div`
  color: #fff;
  font-size: 1.8rem;
  margin: 15px 0;
`;

const ReadyForQuiz = () => {
  const userStatus = useSelector((state) => state.quiz.userReadiness);
  const startQuiz = useSelector((state) => state.quiz.startQuiz);
  const resaltsAllUsers = useSelector((state) => state.quiz.resaltsAllUsers);
  const dispatch = useDispatch();

  const openQuestions = () => {
    if (userStatus) {
      dispatch(getUserUnready());
    } else {
      dispatch(getUserReady());
      dispatch(getQuestions());
    }
  };

  useEffect(() => {
    onValue(ref(db, 'start/'), (snapshot) => {
      dispatch(getStartQuiz(snapshot.val()));
    });
  }, [dispatch]);

  return resaltsAllUsers.length !== 0 ? (
    <Results />
  ) : (
    <ContainerFlex>
      {startQuiz && userStatus ? (
        <ListQuestions />
      ) : (
        <>
          {userStatus ? (
            <>
              <TextQuestion>Ready to start The Quiz</TextQuestion>
              <Button
                textButton="CANCEL"
                nameButton="cancel"
                getClick={openQuestions}
              />
            </>
          ) : (
            <>
              <TextQuestion>START if you are ready to start Quiz</TextQuestion>
              <Button
                textButton="START"
                nameButton="start"
                getClick={openQuestions}
              />
            </>
          )}
        </>
      )}
    </ContainerFlex>
  );
};

export default ReadyForQuiz;
