import React, { useState } from "react";
import * as S from "./styled";

const BikerCard = props => {
  const [timeDuration, setTimeDuration] = useState(props.pickup_estimate);
  const [editTime, setEditTime] = useState(false);
  const { waiting, assigned, picked_up, delivered } = props.orderStatus;
  const { city, address, zip } = props.destination;

  const time = ["15 min", "30 min", "45 min", "1h", "1h 15min", "1h 30min"];

  const handleSubmit = event => {
    props.editTimer(props.orderId, timeDuration);
    setEditTime(false);
    event.preventDefault();
  };

  return (
    <S.Wrapper>
      <div>
        <S.BusinessIcon />
        <S.Origin>{props.origin}</S.Origin>
      </div>
      <div>
        <ul>
          <S.Status status={waiting}>Waiting</S.Status>
          <S.Status status={assigned}>Assigned</S.Status>
          <S.Status status={picked_up}>Pike Up</S.Status>
          <S.Status status={delivered}>Delivered</S.Status>
        </ul>
      </div>
      <div>
        <S.Info>Delivery location:</S.Info>
        <S.Label>
          {address}, {city}
        </S.Label>
        <S.Label>{zip}</S.Label>
      </div>
      <div>
        <form onSubmit={event => handleSubmit(event)}>
          <S.Label>
            Estimated time:
            <S.Info>
              {props.pickup_estimate}
              <S.EditIcon
                hide={props.pickup_estimate === null}
                onClick={() => setEditTime(true)}
              />
            </S.Info>
            {(props.pickup_estimate === null || editTime) && (
              <select
                value={timeDuration}
                onChange={event => setTimeDuration(event.target.value)}
              >
                {time.map((item, index) => {
                  return (
                    <option key={`biker-select-${index}`} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            )}
          </S.Label>
          {(props.pickup_estimate === null || editTime) && (
            <S.BtnSubmit type="submit" value="Submit" />
          )}
        </form>
      </div>
    </S.Wrapper>
  );
};

export default BikerCard;
