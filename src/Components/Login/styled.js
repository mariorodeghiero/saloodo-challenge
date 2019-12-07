import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 30%;
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

  ${media.lessThan('large')`
    height: 40%;
  `}
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.875rem;
  margin-bottom: 1.875rem;
  font-weight: 600;
  color: #FECD1A;

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
  border-bottom: 1px solid #d7dde8;
  margin: 0.875rem 0 1rem 0;
  transition: border-bottom 0.5s, easy-ease-in-out;
  :focus {
    border-bottom: 1px solid #FECD1A;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 0.5rem 2.75rem;
  margin: 1.25rem 0 0 0;
  background-color: #FECD1A;
  color: #454d53;
  border: none;
  outline: 0;
  width: 100%;
  cursor: pointer;
`;
