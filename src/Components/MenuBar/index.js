import React, { useState, useEffect } from "react";

import Avatar from "../Avatar";

import * as S from "./styled";

const MenuBar = () => {
  return (
    <S.MenuBarWrapper>
      <S.Profile>
        <Avatar
          size="lg"
          image={"https://randomuser.me/api/portraits/men/13.jpg"}
        />
        <S.Name>Larry Wills</S.Name>
        <S.Access>
          Access: <S.Type> Manager</S.Type>
        </S.Access>
      </S.Profile>
      <S.Menu>
        <S.MenuTitle>MENU</S.MenuTitle>
        <S.Item>Bikers</S.Item>
        <S.Item>Shipments</S.Item>
      </S.Menu>
      <S.Logout>
        <button>Log out</button>
      </S.Logout>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
