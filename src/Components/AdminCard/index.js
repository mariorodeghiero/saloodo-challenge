import React, { useState } from 'react';
import * as S from './styled';

const AdminCard = (props) => {
  const [assignedBiker, setAssignedBiker] = useState('unassigned');
  const [editAssigned, setEditAssigned] = useState(false);
  const {
    waiting, assigned, picked_up, delivered,
  } = props.orderStatus;
  const { zip, address } = props.destination;
  const { name } = props.origin;
  const { bikers } = props;

  const handleSubmit = (event) => {
    props.assignedBiker(props.orderId, assignedBiker);
    setEditAssigned(false);
    event.preventDefault();
  };

  return (
    <S.Wrapper>
      <S.OrderSection>
        <S.BusinessIcon />
        <S.Origin>{name}</S.Origin>
        <S.Label>#{props.orderId}</S.Label>
        <S.Label>{props.pickupEstimate}</S.Label>
      </S.OrderSection>
      <S.StatusSection>
        <ul>
          <S.Status status={waiting}>Waiting</S.Status>
          <S.Status status={assigned}>Assigned</S.Status>
          <S.Status status={picked_up}>Pike Up</S.Status>
          <S.Status status={delivered}>Delivered</S.Status>
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
          <S.AssignedLabel>
            Assigned:
          </S.AssignedLabel>
          <S.Assigned>
            {props.assigned ? props.assigned : 'Unassigned'}
            {!picked_up && <S.EditIcon onClick={() => setEditAssigned(!editAssigned)} />}
          </S.Assigned>
          {editAssigned && (
          <S.Select
            value={assignedBiker}
            onChange={(event) => setAssignedBiker(event.target.value)}
          >
            <option value="unassigned">Unassigned</option>
            {bikers.map((item, index) => (
              <option key={`biker-select-${index}`} value={item.name}>
                {item.name}
              </option>
            ))}
          </S.Select>
          )}
          {editAssigned && <S.BtnSubmit type="submit" value="Save" />}
        </form>
      </S.AssignedSection>
    </S.Wrapper>
  );
};

export default AdminCard;
