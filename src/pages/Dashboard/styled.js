import styled from 'styled-components';
import media from 'styled-media-query';

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  grid-template-areas: "menubar shipments";
  background-color: #fafafa;

  ${media.lessThan('large')`
    grid-template-columns: 100%;
    grid-template-areas: "shipments"
                          "menubar";
  `};
`;

export const Shipments = styled.div`
  grid-area: shipments;
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan('medium')`
    height: 90vh;
    margin-bottom: 200px;
  `}
`;
