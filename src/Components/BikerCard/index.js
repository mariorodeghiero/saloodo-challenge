import React, { useState } from "react";
import * as S from "./styled";

const BikerCard = props => {
  const [assignedBiker, setAssignedBiker] = useState("unassigned");
  const [editTime, setEditTime] = useState(false);
  const { waiting, assigned, pike_up, delivered } = props.orderStatus;
  const { city, address, duration_estimate, zip } = props.destination;
  const bikers = props.bikers;

  const time = [
    "15 min",
    "30 min",
    "45 min",
    "1 hour",
    "1h and 15min",
    "1h and 30min"
  ];

  const handleSubmit = event => {
    alert("Your favorite flavor is: " + assignedBiker);
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
            Time:
            <S.Info>
              {duration_estimate} min
              <S.EditIcon
                hide={!props.assigned && props.assigned !== null}
                onClick={() => setEditTime(true)}
              />
            </S.Info>
            {editTime && (
              <select
                value={duration_estimate}
                onChange={event => setAssignedBiker(event.target.value)}
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
          {editTime && <S.BtnSubmit type="submit" value="Submit" />}
        </form>
      </div>
    </S.Wrapper>
  );
};

export default BikerCard;
