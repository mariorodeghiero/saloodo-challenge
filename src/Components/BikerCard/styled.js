import styled from "styled-components";
import media from "styled-media-query";
import { Edit } from "styled-icons/material/Edit";
import { Business } from "styled-icons/material/Business";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "order status origin assigned"
                       "order status dest assigned";
  align-items: center;
  padding: 1.5rem;
  margin-top: 0.5rem;
  border-radius: 3px;
  width: 90%;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  ${media.lessThan("medium")`
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "order status"
                         "origin dest"
                         "assigned assigned";
    grid-row-gap: 1rem;
    border-radius: 4px;
  `};
`;


export const Status = styled.li`
  font-family: Roboto;
  font-weight: ${props => (props.status ? "400" : "300")};
  font-size: 0.875rem;
  color: ${props => (props.status ? "#41B809" : "#B8C3CC")};
  padding: 0.25rem;
`;

export const OrderSection = styled.div`
  grid-area: order;
`;

export const StatusSection = styled.div`
  grid-area: status;
`;

export const AssignedSection = styled.div`
  grid-area: assigned;
`;

export const OriginSection = styled.div`
  grid-area: origin;
`;

export const DestinationSection = styled.div`
  grid-area: dest;
  margin-top: 0.5rem;

  ${media.lessThan("medium")`
    margin-top: 0;
  `};
`;

export const Label = styled.h3`
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.875rem;
  color: #95a1ac;
  padding: 0.25rem;
  ${media.lessThan("medium")`
    font-size: 0.75rem;
  `};
`;

export const EstimateTimeLabel = styled.label`
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.875rem;
  color: #95a1ac;
  padding: 0.25rem;
  text-align: left;
  ${media.lessThan("medium")`
    font-size: 0.75rem;
  `};
`;

export const Origin = styled.h3`
  font-family: Roboto;
  font-weight: 300;
  font-size: 1.15rem;
  color: #292e33;
  padding: 0.25rem;
  text-transform: capitalize;
  ${media.lessThan("medium")`
    font-size: 1rem;
  `};
`;

export const Info = styled.p`
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.875rem;
  color: #292e33;
  padding: 0.25rem;
  text-transform: capitalize;
  ${media.lessThan("medium")`
    font-size: 0.75rem;
    line-height: 1.6em;
  `};
`;

export const EditIcon = styled(Edit)`
  height: 24px;
  width: 24px;
  margin-left: 0.5rem;
  display: ${props => (props.hide ? "none" : "inline")};
  cursor: pointer;
  ${media.lessThan("medium")`
    height: 16px;
    width: 16px;
    margin-left: 0.2rem;
  `};
`;

export const BusinessIcon = styled(Business)`
  height: 24px;
  width: 24px;
  margin-left: 0.5rem;
`;

export const BtnSubmit = styled.input`
  padding: 0.35rem 1rem 0.35rem 1rem;
  background-color: #41b809;
  color: #ffffff;
  border-radius: 3px;
  border: none;
  outline: 0;
`;
