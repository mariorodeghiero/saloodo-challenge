import React from "react";
import * as S from "./styled";

const Avatar = props => {
  return (
    <S.Avatar center={props.center} image={props.image} size={props.size} />
  );
};

export default Avatar;
