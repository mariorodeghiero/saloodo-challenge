import styled from 'styled-components';
import media from 'styled-media-query';
import { FadeIn } from '../../utils/styled';

export const Wrapper = styled.div`
  width: 30%;
  max-width: 400px;
  min-width: 280px;
  height: 48%;
  min-height: 260px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  padding: 32px;
  display: grid;
  align-content: center;
  animation: 0.75s ${FadeIn} ease-in;

  ${media.lessThan('large')`
    height: 40%;
  `}
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.875rem;
  margin-bottom: 1.875rem;
  font-weight: 600;
  color: var(--yellow);

  ${media.lessThan('large')`
    font-size: 1.25rem;
  `}
`;

export const Input = styled.input`
  width: 100%;
  outline: 0;
  padding: 8px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--grey);
  margin: 0.875rem 0 1rem 0;
  transition: border-bottom 0.5s, easy-ease-in-out;
  :focus {
    border-bottom: 1px solid var(--yellow);
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 0.5rem 2.75rem;
  margin: 1.25rem 0 0 0;
  background-color: var(--yellow);
  color: #454d53;
  border: none;
  outline: 0;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;
  :hover {
    background-color: var(--red);
    color: var(--white);
`;
