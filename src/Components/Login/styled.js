import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 30%;
  min-width: 280px;
  height: 48%;
  min-height: 260px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 32px;
  display: grid;
  align-content: center;

  ${media.lessThan("large")`
    height: 40%;
  `}
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.875rem;

  ${media.lessThan("large")`
    font-size: 1.25rem;
  `}
`;

export const Label = styled.label`
  display: block;
  margin: 1.5rem 0 0.15rem 0;
  font-size: 0.75rem;
  font-family: Roboto;
`;

export const Input = styled.input`
  width: 100%;
  outline: 0;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #c3c3c3;
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 0.5rem 2.75rem;
  margin: 1.25rem 0 0 0;
  background-color: #d7dde8;
  border: none;
  outline: 0;
  width: 100%;
  cursor: pointer;
`;
