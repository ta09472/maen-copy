import React, { useState } from "react";
import HeaderStyled from "../styled/commonStyled/HeaderStyled";
import Wrapper from "../styled/commonStyled/Wrapper";
import Logo from "./Logo";
import Search from "./Search";
import UserBlock from "./UserBlock";
import Login from "./Login";
import UploadButton from "../common/UploadButton";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Search />
      <Wrapper>
        <UploadButton />
        <Login />
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
