import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  align-items: center;
  margin-top: 10px;
  padding: 1.5rem;
  margin-top: 0.5rem;
  border-radius: 3px;
  width: 90%;
  background: white;
  box-shadow: 0 2px 1px rgba(170, 170, 170, 0.25);
  ${media.lessThan("large")`

  `};
`;

export const Waiting = styled.li`
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
`;
