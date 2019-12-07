import React from 'react';
import * as S from './styled';
import SVG from 'react-inlinesvg';
import Logo from '../../assets/logo.svg'

const Login = (props) => {
  const [email, handleChangeEmail] = React.useState('');
  const [password, handleChangePassword] = React.useState('');

  const handleSubmit = (event) => {
    props.authenticateUser(email, password);
    event.preventDefault();
  };

  return (
    <S.Wrapper>
      <form onSubmit={(event) => handleSubmit(event)}>
        <SVG src={Logo} alt="Logo"/>
        <S.Title>Challenge</S.Title>
        <S.Input
          id="email"
          onKeyUp={(e) => handleChangeEmail(e.currentTarget.value)}
          autoFocus
          type="email"
          placeholder="Email"
          require
        >
        </S.Input>
        <S.Input
          id="password"
          onKeyUp={(e) => handleChangePassword(e.currentTarget.value)}
          type="password"
          require
          placeholder="Password"
        >
        </S.Input>
        <S.Button>Log In</S.Button>
      </form>
    </S.Wrapper>
  );
};

export default Login;
