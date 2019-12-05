import styled from "styled-components";
import media from "styled-media-query";
import { Edit } from "styled-icons/material/Edit";
import { Business } from "styled-icons/material/Business";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  align-items: center;
  padding: 1.5rem;
  margin-top: 0.5rem;
  border-radius: 3px;
  width: 90%;
  background: white;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

  ${media.lessThan("medium")`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
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

export const Label = styled.h3`
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.875rem;
  color: #95a1ac;
  padding: 0.25rem;
  ${media.lessThan("medium")`
    font-size: 0.75rem;
    line-height: 1.6em;
  `};
`;

export const Origin = styled.h3`
  font-family: Roboto;
  font-weight: 300;
  font-size: 1.15rem;
  color: #292e33;
  padding: 0.25rem;
  text-transform: capitalize;
`;

export const Info = styled.p`
  font-family: Roboto;
  font-weight: 300;
  font-size: 1.15rem;
  color: #292e33;
  padding: 0.25rem;
  text-transform: capitalize;

  ${media.lessThan("medium")`
    font-size: 0.875rem;
  `};
`;

export const EditIcon = styled(Edit)`
  height: 24px;
  width: 24px;
  margin-left: 0.5rem;
  display: ${props => (props.hide ? "none" : "inline")};
  cursor: pointer;
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
