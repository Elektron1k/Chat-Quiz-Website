import styled, { css } from 'styled-components';

const ButtonDefault = styled.button`
  height: 35px;
  width: 150px;
  border: rgb(86, 186, 183) solid 2px;
  border-radius: 5px;
  color: rgb(86, 186, 183);
  font-size: 1.1rem;
  background: rgb(35, 35, 39);
  cursor: pointer;

  ${(props) =>
    props.nameButton === 'logout' &&
    css`
      border-radius: 3px;
      width: 100px;
      margin: 30px 50px;
    `};

  ${(props) =>
    props.nameButton === 'cancel' &&
    css`
      background: rgb(86, 186, 183);
      color: #fff;
    `};

  ${(props) =>
    props.nameButton === 'chat' &&
    css`
      border-radius: 10px;
      width: 130px;
      background: none;
      margin: 0 5px;
    `};

  ${(props) =>
    props.nameButton === 'question' &&
    css`
      border-radius: 3px;
      width: 100%;
      margin: 20px auto;
    `};

  ${(props) =>
    props.nameButton === 'question' &&
    props.disabled &&
    css`
      border-radius: 3px;
      width: 100%;
      margin: 20px auto;
      border: rgb(55, 95, 96) solid 2px;
      color: rgb(55, 95, 96);
    `};

  ${(props) =>
    props.nameButton === 'start' &&
    css`
      background: none;
      width: 170px;
    `};
`;

const Button = ({ nameButton, textButton, getClick, disabled }) => {
  return (
    <ButtonDefault
      disabled={disabled}
      onClick={() => getClick(textButton)}
      nameButton={nameButton}
    >
      {textButton}
    </ButtonDefault>
  );
};

export default Button;
