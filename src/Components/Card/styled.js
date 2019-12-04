import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: block;
  margin-top: 10px;
  padding: 1.5rem;
  margin-top: 0.5rem;
  border-radius: 2px;
  height: 80px;
  width: 90%;
  background: white;
  box-shadow: 0 2px 1px rgba(170, 170, 170, 0.25);
  ${media.lessThan("large")`

  `};
`;
