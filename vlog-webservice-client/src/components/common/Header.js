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
import { logoutRequset } from "../../redux/module/login";
import { useNavigate } from "react-router-dom";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import IconWrapper from "../styled/commonStyled/IconWrapper";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = () => {
    dispatch(logoutRequset);
    window.location.href = "/";
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
            <DropDown visible={isVisible}>
              <Link to={`/channel/${user}`} color="#7f8fa6">
                <IconWrapper>
                  <MdAccountCircle />
                  Channel
                </IconWrapper>
              </Link>
              <Logout onClick={handleLogout}>
                <IconWrapper>
                  <MdLogout />
                  Logout
                </IconWrapper>
              </Logout>
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
