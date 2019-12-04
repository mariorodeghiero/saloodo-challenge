import React from "react";
import * as S from "./styled";

const Login = props => {
  const [email, handleChangeEmail] = React.useState("");
  const [password, handleChangePassword] = React.useState("");

  const handleSubmit = event => {
    props.authenticateUser(email, password);
    event.preventDefault();
  };

  return (
    <S.Wrapper>
      <form onSubmit={event => handleSubmit(event)}>
        <S.Title>Saloodo Challenge</S.Title>
        <S.Label htmlFor="email">Email:</S.Label>
        <S.Input
          id="email"
          onKeyUp={e => handleChangeEmail(e.currentTarget.value)}
          autoFocus
          type="email"
          require
        ></S.Input>
        <S.Label htmlFor="password">Password:</S.Label>
        <S.Input
          id="password"
          onKeyUp={e => handleChangePassword(e.currentTarget.value)}
          type="password"
          require
        ></S.Input>
        <S.Button>Submit</S.Button>
      </form>
    </S.Wrapper>
  );
};

export default Login;
