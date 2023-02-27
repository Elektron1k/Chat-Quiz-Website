import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUserReady } from '../redux/userSlice';
import Button from './Button';

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 65%;
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
  const userStatus = useSelector((state) => state.user.userReadiness);
  const dispatch = useDispatch();

  const openQuestions = () => {
    dispatch(getUserReady());
  };

  return (
    <ContainerFlex>
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
    </ContainerFlex>
  );
};

export default ReadyForQuiz;
