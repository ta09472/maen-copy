import React, { useState } from "react";
import HeaderStyled from "../styled/commonStyled/HeaderStyled";
import Logo from "./Logo";
import Search from "./Search";
import UserBlock from "./UserBlock";
import Login from "./Login";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Search />
      <Login />
    </HeaderStyled>
  );
};

export default Header;
