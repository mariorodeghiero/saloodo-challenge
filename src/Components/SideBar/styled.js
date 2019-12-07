import styled from "styled-components";
import media from "styled-media-query";
import { LogOut } from "styled-icons/boxicons-regular/LogOut";

export const MenuBar = styled.div`
  background: #606c88;
  height: 100vh;
  padding: 1.75rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: menubar;

  ${media.lessThan("large")`
    height: auto;
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: .5rem 0 0.5rem 1rem;
    background: #ffffff;
    border-top: 1px solid #f5f5f5;
  `}
`;

export const Profile = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 1.75rem;
  align-items: end;
  ${media.lessThan("large")`
    margin-bottom: 0;
  `}
`;

export const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #ffffff;
  ${media.lessThan("large")`
    display: none;
  `}
`;

export const Access = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 0;
  font-family: Roboto;
  color: #292e33;
  ${media.lessThan("large")`
    display: none;
  `}
`;

export const Type = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  font-family: Roboto;
  color: #c3c3c3;
  text-transform: capitalize;
  ${media.lessThan("large")`
    display: none;
  `}
`;

export const Menu = styled.ul`
  margin-bottom: 10rem;

  ${media.lessThan("large")`
    padding-top: 1rem;
    margin-bottom: 0;
  `}
`;

export const MenuTitle = styled.h2`
  font-weight: 300;
  margin-bottom: 1rem;
  margin-top: 1rem;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const Item = styled.li`
  color: #ffffff;
  font-family: Roboto;
  font-weight: 300;
  font-size: 1rem;
  padding: 1rem;
  cursor: default;

  ${media.lessThan("large")`
    display: inline;
    font-size: 0.875rem;
  `}
`;

export const Logout = styled.div`
  margin-bottom: 2rem;

  ${media.lessThan("large")`
    margin-bottom: 0;
    margin-top: 0.75rem;
    display: grid;
    justify-items: center;
  `}

  span {
    font-family: Roboto;
    color: #c3c3c3;
    font-size: 0.875rem;
    margin-left: 0.35rem;

    ${media.lessThan("large")`
      font-size: 0.5rem;
      color: #B8C3CC;
      display: block;
      line-height: 1.2em;
    `}
  }
`;

export const BtnLogout = styled(LogOut)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  fill: #292e33;
  ${media.lessThan("large")`
    width: 24px;
    height: 24px;
  `}
`;
