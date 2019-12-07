import React from 'react';
import Avatar from '../Avatar';
import * as S from './styled';

const SideBar = ({
 image, name, typeOfAccess, initializeUser 
}) => (
  <S.MenuBar>
    <S.Profile>
      <Avatar size="lg" image={image} />
      <S.Name>{name}</S.Name>
      <S.Access>
        Access:
        <S.Type>{typeOfAccess}</S.Type>
      </S.Access>
    </S.Profile>
    <S.Menu>
      <S.MenuTitle>MENU</S.MenuTitle>
      <S.Item>{typeOfAccess === 'manager' ? 'Shipments' : 'Orders'}</S.Item>
    </S.Menu>
    <S.Logout>
      <S.BtnLogout onClick={() => initializeUser()} />
      <span>Log Out</span>
    </S.Logout>
  </S.MenuBar>
);

export default SideBar;
