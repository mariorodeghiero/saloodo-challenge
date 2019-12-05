import React, { useState } from "react";
import * as S from "./styled";

const AdminCard = props => {
  const [assignedBiker, setAssignedBiker] = useState("unassigned");
  const [editAssigned, setEditAssigned] = useState(false);
  const { waiting, assigned, picked_up, delivered } = props.orderStatus;
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
          <S.Status status={waiting}>Waiting</S.Status>
          <S.Status status={assigned}>Assigned</S.Status>
          <S.Status status={picked_up}>Pike Up</S.Status>
          <S.Status status={delivered}>Delivered</S.Status>
        </ul>
      </div>
      <div>
        {/* <S.Label>Estimated time:</S.Label>
        <S.Info>{duration_estimate} min</S.Info> */}
        <S.Label>Address:</S.Label>
        <S.Info>
          {address}, {city}
        </S.Info>
      </div>
      <div>
        <form onSubmit={event => handleSubmit(event)}>
          <S.Label>
            Assigned:
            <S.Assigned>
              {props.assigned ? props.assigned : "Unassigned"}
              <S.EditIcon onClick={() => setEditAssigned(!editAssigned)} />
            </S.Assigned>
            {editAssigned && (
              <select
                value={assignedBiker}
                onChange={event => setAssignedBiker(event.target.value)}
              >
                <option value="unassigned">Unassigned</option>
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
