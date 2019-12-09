import React, { useState } from 'react';
import * as S from './styled';

const BikerCard = (props) => {
  const [timeDuration, setTimeDuration] = useState(props.pickupEstimate);
  const [editTime, setEditTime] = useState(false);
  const {
    waiting, assigned, picked_up, delivered,
  } = props.orderStatus;
  const { city, address, zip } = props.destination;
  const { name } = props.origin;

  const time = ['15 min', '30 min', '45 min', '1h', '1h 15min', '1h 30min'];

  const handleSubmit = (event) => {
    const time = timeDuration === null ? '15 min' : timeDuration;
    props.editTimer(props.orderId, time);
    setEditTime(false);
    event.preventDefault();
  };

  return (
    <S.Wrapper>
      <S.OrderSection>
        <S.BusinessIcon />
        <S.Origin>{name}</S.Origin>
        <S.Label>#{props.orderId}</S.Label>
      </S.OrderSection>
      <S.StatusSection>
        <ul>
          <S.Status status={waiting}>Waiting</S.Status>
          <S.Status status={assigned}>Assigned</S.Status>
          <S.Status status={picked_up}>Pike Up</S.Status>
          <S.Status status={delivered}>Delivered</S.Status>
          {picked_up && !delivered && <button onClick={() => props.confirmDelivered(props.orderId)}>Delivered shipment</button>}
        </ul>
      </S.StatusSection>
      <S.OriginSection>
        <S.Label>Origin:</S.Label>
        <S.Info>
          {props.origin.address}, {props.origin.zip}
        </S.Info>
      </S.OriginSection>
      <S.DestinationSection>
        <S.Label>Destination:</S.Label>
        <S.Info>
          {address}, {zip}
        </S.Info>
      </S.DestinationSection>
      <S.AssignedSection>
        <form onSubmit={(event) => handleSubmit(event)}>
          <S.EstimateTimeLabel>
          Estimated time:
          </S.EstimateTimeLabel>
          <S.Info>
            {props.pickupEstimate !== 'Time: waiting biker' && props.pickupEstimate}
            {!delivered && props.pickupEstimate !== 'Time: waiting biker'
               && (
               <S.EditIcon
                 hide={props.pickupEstimate === null}
                 onClick={() => setEditTime(!editTime)}
               />
               )}
          </S.Info>
          {(props.pickupEstimate === null || editTime || props.pickupEstimate === 'Time: waiting biker') && (
          <S.Select
            value={timeDuration}
            onChange={(event) => setTimeDuration(event.target.value)}
          >
            {time.map((item, index) => (
              <option key={`biker-select-${index}`} value={item}>
                {item}
              </option>
            ))}
          </S.Select>
          )}
          {(props.pickupEstimate === null || editTime || props.pickupEstimate === 'Time: waiting biker') && (
            <S.BtnSubmit type="submit" value="Save" />
          )}
        </form>
      </S.AssignedSection>
    </S.Wrapper>
  );
};

export default BikerCard;
