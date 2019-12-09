import styled from 'styled-components';
import media from 'styled-media-query';
import { LogOut } from 'styled-icons/boxicons-regular/LogOut';

export const MenuBar = styled.div`
  background: #606c88;
  height: 100vh;
  padding: 1.75rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: menubar;
  position: fixed;
  width: 240px;

  ${media.lessThan('large')`
    height: auto;
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 0.5rem 2rem 0.5rem 4rem;
    background: var(--white);
    border-top: 1px solid var(--border);
  `}
`;

export const Profile = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 1.75rem;
  align-items: end;
  ${media.lessThan('large')`
    align-items: center;
  `}
`;

export const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--white);
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const Access = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 0;
  font-family: Roboto;
  color: var(--text);
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const Type = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  font-family: Roboto;
  color: var(--silver);
  text-transform: capitalize;
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const Menu = styled.ul`
  margin-bottom: 10rem;

  ${media.lessThan('large')`
    padding-top: 1rem;
    margin-bottom: 0;
  `}
`;

export const MenuTitle = styled.h2`
  font-weight: 300;
  margin-bottom: 1rem;
  margin-top: 1rem;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const Item = styled.li`
  color: var(--white);
  font-family: Roboto;
  font-weight: 300;
  font-size: 1rem;
  padding: 1rem;
  cursor: default;

  ${media.lessThan('large')`
    display: inline;
    font-size: 0.875rem;
  `}
`;

export const Logout = styled.div`
  margin-bottom: 2rem;

  ${media.lessThan('large')`
    margin-bottom: 0;
    display: grid;
    justify-items: center;
    align-items: center;
  `}

  span {
    font-family: Roboto;
    color: var(--silver);
    font-size: 0.875rem;
    margin-left: 0.35rem;

    ${media.lessThan('large')`
      font-size: 0.5rem;
      color: var(--status-inactive);
      display: block;
      line-height: 1.2em;
      display: none;
    `}
  }
`;

export const BtnLogout = styled(LogOut)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  fill: var(--bg-icon);
  ${media.lessThan('large')`
    width: 24px;
    height: 24px;
    fill: var(--bg-icon);
  `}
`;
