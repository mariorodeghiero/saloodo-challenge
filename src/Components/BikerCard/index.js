import React, { useState } from 'react';
import * as S from './styled';

const BikerCard = (props) => {
  const [timeDuration, setTimeDuration] = useState(props.pickupEstimate);
  const [editTime, setEditTime] = useState(false);
  const {
    waiting, assigned, picked_up, delivered,
  } = props.orderStatus;
  const { city, address, zip } = props.destination;

  const time = ['15 min', '30 min', '45 min', '1h', '1h 15min', '1h 30min'];

  const handleSubmit = (event) => {
    const time = timeDuration === null ? '15 min' : timeDuration;
    props.editTimer(props.orderId, time);
    setEditTime(false);
    event.preventDefault();
  };

  return (
    <S.Wrapper>
      <div>
        <S.BusinessIcon />
        <S.Origin>{props.origin}</S.Origin>
        <S.Label>#{props.orderId}</S.Label>
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
        <form onSubmit={(event) => handleSubmit(event)}>
          <S.Label>
            Estimated time:
            <S.Info>
              {props.pickupEstimate}
              <S.EditIcon
                hide={props.pickupEstimate === null}
                onClick={() => setEditTime(true)}
              />
            </S.Info>
            {(props.pickupEstimate === null || editTime) && (
              <select
                value={timeDuration}
                onChange={(event) => setTimeDuration(event.target.value)}
              >
                {time.map((item, index) => (
                  <option key={`biker-select-${index}`} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}
          </S.Label>
          {(props.pickupEstimate === null || editTime) && (
            <S.BtnSubmit type="submit" value="Save" />
          )}
        </form>
      </div>
    </S.Wrapper>
  );
};

export default BikerCard;
