import React from "react";
import * as S from "./styled";

const Card = props => {
  console.log(props.destination);
  const { waiting, assigned, pike_up, delivered } = props.orderStatus;
  const { city, address, duration_estimate, zip } = props.destination;
  return (
    <S.Wrapper>
      <div>
        <label>icon</label>
        <S.Origin>{props.origin}</S.Origin>
      </div>
      <div>
        <ul>
          <S.Waiting status={waiting}>Waiting</S.Waiting>
          <S.Waiting status={assigned}>Assigned</S.Waiting>
          <S.Waiting status={pike_up}>Pike Up</S.Waiting>
          <S.Waiting status={delivered}>Delivered</S.Waiting>
        </ul>
      </div>
      <div>
        <S.Label>Estimated time:</S.Label>
        <S.Info>{duration_estimate} min</S.Info>
        <S.Label>Address:</S.Label>
        <S.Info>
          {address}, {city}
        </S.Info>
      </div>
      <div>
        {props.assigned ? (
          <>
            <S.Label>Assigned:</S.Label>
            <S.Info>{props.assigned}</S.Info>
          </>
        ) : (
          <select value="test">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        )}
      </div>
    </S.Wrapper>
  );
};

export default Card;
