import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { resetResults } from '../redux/quizSlice';
import Button from './Button';

const Container = styled.div`
  display: flex;
`;

const ContainerResults = styled.div`
  padding: 100px 20px;
  width: 300px;
`;

const Table = styled.table`
  min-width: 200px;
  border-spacing: 10px;
`;

const Th = styled.th`
  color: #fff;
  font-weight: 400;
  text-align: left;
`;

const Tr = styled.tr`
  color: rgb(86, 186, 183);
`;

const Td = styled.td`
  text-align: center;
  color: #fff;
  font-size: 1.2rem;

  ${(props) =>
    props.name &&
    css`
      color: rgb(86, 186, 183);
      text-align: left;
    `}
`;

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 600px;
`;

const Results = () => {
  const dispatch = useDispatch();
  const resaltsAllUsers = useSelector((state) => state.quiz.resaltsAllUsers);

  const resetingResults = () => {
    dispatch(resetResults());
  };

  console.log(resaltsAllUsers);
  return (
    <Container>
      <ContainerResults>
        <Table>
          <thead>
            <tr>
              <Th>user</Th>
              <Th>scores</Th>
            </tr>
          </thead>
          <tbody>
            {resaltsAllUsers.map((el, index) => (
              <Tr key={index}>
                <Td name>
                  <div
                    style={{
                      height: '30px',
                      marginBottom: '10px',
                      display: 'flex',
                    }}
                  >
                    <img
                      src={el.photo}
                      width="30px"
                      alt="avatar"
                      style={{ borderRadius: '15px' }}
                    />
                    <span style={{ margin: '5px 5px 10px' }}>{el.name}</span>
                  </div>
                </Td>
                <Td>{el.result}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </ContainerResults>
      <ContainerFlex>
        <Button nameButton="start" textButton="ok" getClick={resetingResults} />
      </ContainerFlex>
    </Container>
  );
};

export default Results;
