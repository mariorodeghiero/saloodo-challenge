import styled from "styled-components";
import media from "styled-media-query";

export const MenuBarWrapper = styled.aside`
  background: #606c88;
  height: 100vh;
  padding: 1.75rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 0;
  width: 16rem;
  transition: background 0.5s;

  ${media.lessThan("large")`
    bottom: 0;
    display: flex;
    flex-direction: row;
    height: auto;
    padding: 1rem;
    position: fixed;
    width: 100%;
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
  cursor: pointer;

  ${media.lessThan("large")`
    display: inline;
  `}
`;

export const Logout = styled.div`
  margin-bottom: 2rem;

  ${media.lessThan("large")`
    margin-bottom: 0;
    margin-top: 0.75rem;
  `}
`;
