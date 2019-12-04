import React, { useState } from "react";
import * as S from "./styled";

const AdminCard = props => {
  const [assignedBiker, setAssignedBiker] = useState("unassigned");
  const [editAssigned, setEditAssigned] = useState(false);
  const { waiting, assigned, pike_up, delivered } = props.orderStatus;
  const { city, address, duration_estimate } = props.destination;
  const bikers = props.bikers;

  const handleSubmit = event => {
    props.assignedBiker(props.orderId, assignedBiker);
    setEditAssigned(false);
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
        <form onSubmit={event => handleSubmit(event)}>
          <S.Label>
            Assigned:
            <S.Info>
              {props.assigned ? props.assigned : "Unassigned"}
              <S.EditIcon onClick={() => setEditAssigned(!editAssigned)} />
            </S.Info>
            {editAssigned && (
              <select
                value={assignedBiker}
                onChange={event => setAssignedBiker(event.target.value)}
              >
                <option value={null}>Unassigned</option>
                {bikers.map((item, index) => {
                  return (
                    <option key={`biker-select-${index}`} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            )}
          </S.Label>
          {editAssigned && <S.BtnSubmit type="submit" value="Submit" />}
        </form>
      </div>
    </S.Wrapper>
  );
};

export default AdminCard;
