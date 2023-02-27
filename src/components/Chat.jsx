import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { db } from '../firebase/firebase';
import avatar from '../img/avatar.jpg';
import { getAllMassege, getNewMassege } from '../redux/massegesSlice';
import Button from './Button';

const Container = styled.div`
  width: 35%;
  margin-top: 100px;
  border-left: #fff solid 2px;
  border-radius: 10px 0 0 10px;
  background: #667;
  height: 90vh;
`;

const ContainerMassega = styled.div`
  overflow: auto;
  max-height: 70vh;
`;

const ContainerSend = styled.div`
  display: flex;
  height: 80px;
  position: absolute;
  bottom: 50px;
  width: 35%;
`;

const Massage = styled.div`
  width: 60%;
  height: 100px;
  margin: 5px;
  padding: 5px;

  ${(props) =>
    props.styleMassege === 'right' &&
    css`
      margin-left: auto;
    `}
`;

const TextArea = styled.textarea`
  background: rgb(84, 84, 86);
  border-radius: 10px;
  border: none;
  width: 80%;
  height: 60px;
  margin: 5px;
  padding: 15px;
  resize: none;
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
  const [massege, setMassege] = useState('');
  const masseges = useSelector((store) => store.masseges.masseges);
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const handleMassege = () => {
    dispatch(getNewMassege(massege));
    setMassege('');
  };

  useEffect(() => {
    onValue(ref(db, 'masseges/'), (snapshot) => {
      dispatch(getAllMassege(snapshot.val()));
    });
  }, [dispatch]);

  return (
    <Container>
      <ContainerMassega>
        {masseges.length !== 0 &&
          masseges.map((massege, index) => {
            const userImage = massege.userPhoto ? massege.userPhoto : avatar;
            const styleMassege = user.uid === massege.userId ? '' : 'right';
            return (
              <Massage styleMassege={styleMassege} key={index}>
                <Nik>
                  <img
                    src={userImage}
                    width="30px"
                    alt="avatar"
                    style={{ borderRadius: '15px' }}
                  />
                  <NixText>{massege.userName}</NixText>
                </Nik>
                <MassageText>{massege.massege}</MassageText>
              </Massage>
            );
          })}
      </ContainerMassega>

      <ContainerSend>
        <TextArea
          placeholder="Send a message..."
          value={massege}
          onChange={(e) => setMassege(e.target.value)}
        />
        <Button textButton="SEND" nameButton="chat" getClick={handleMassege} />
      </ContainerSend>
    </Container>
  );
};

export default Chat;
