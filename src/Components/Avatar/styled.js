import styled from 'styled-components';
import media from 'styled-media-query';

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  overflow: hidden;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  background-image: url(${(props) => props.image && props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #c3c3c3;
  border-radius: 100%;
  text-align: center;
  align-content: center;
  margin: ${(props) => (props.center ? '0 auto' : '0')};

  ${media.lessThan('large')`
    width: 32px;
    height: 32px;
  `};
`;
