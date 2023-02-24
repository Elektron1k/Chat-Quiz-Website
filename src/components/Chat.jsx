import styled, { css } from 'styled-components';
import avatar from '../img/avatar.png';

const Container = styled.div`
  width: 35%;
  margin-top: 100px;
  border-left: #fff solid 2px;
  border-radius: 10px 0 0 10px;
  background: #666;
  height: 90vh;
`;

const Massage = styled.div`
  width: 60%;
  height: 100px;
  margin: 5px;
  padding: 5px;

  ${(props) =>
    props.right &&
    css`
      margin-left: auto;
    `}
`;

const Nik = styled.div`
  color: rgb(86, 186, 183);
  height: 30px;
  margin-bottom: 10px;
  display: flex;
`;

const NixText = styled.div`
  margin: 5px 5px 10px;
`;

const MassageText = styled.p`
  box-shadow: 0px 0px 7px 7px #000000;
  border-radius: 10px;
  color: #fff;
  min-height: 40px;
  padding: 5px;
`;

const Chat = () => {
  return (
    <Container>
      <Massage>
        <Nik>
          <img src={avatar} width="30px" alt="avatar" />
          <NixText>fff fff</NixText>
        </Nik>
        <MassageText>ee</MassageText>
      </Massage>
      <Massage right>
        <Nik>
          <img src={avatar} width="30px" alt="avatar" />
          <NixText>fff fff</NixText>
        </Nik>
        <MassageText>ee</MassageText>
      </Massage>
      <Massage>
        <Nik>
          <img src={avatar} width="30px" alt="avatar" />
          <NixText>fff fff</NixText>
        </Nik>
        <MassageText>ee</MassageText>
      </Massage>
    </Container>
  );
};

export default Chat;
