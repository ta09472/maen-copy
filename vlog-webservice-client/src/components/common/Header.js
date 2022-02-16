import React, { useState } from "react";
import HeaderStyled from "../styled/commonStyled/HeaderStyled";
import Wrapper from "../styled/commonStyled/Wrapper";
import Logo from "./Logo";
import Search from "./Search";
import UserBlock from "./UserBlock";
import Login from "./Login";
import UploadButton from "../common/UploadButton";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logout from "../styled/commonStyled/Logout";
import DropDown from "../styled/commonStyled/DropDown";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const [user, setUser] = useState("철수");
  return (
    <HeaderStyled>
      <Logo />
      <Search />
      <Wrapper>
        {isLoggedIn && <UploadButton />}
        {isLoggedIn ? (
          <div onClick={handleClick}>
            <UserBlock userName={user} />
            <DropDown display={isVisible}>
              <Link to={`/channel/${user}`}>내채널</Link>
              <Logout>Logout</Logout>
            </DropDown>
          </div>
        ) : (
          <Login />
        )}
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
