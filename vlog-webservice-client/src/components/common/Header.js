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
import Cookies from "universal-cookie";

const Header = () => {
  const cookies = new Cookies();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.login.user);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = () => {
    dispatch(logoutRequset);
    window.location.href = "/";
  };

  return (
    <HeaderStyled>
      <Logo />
      <Search />
      <Wrapper>
        {isLoggedIn && <UploadButton />}
        {isLoggedIn ? (
          <div onClick={handleClick}>
            <UserBlock userName={userData.name} />
            <DropDown visible={isVisible}>
              <Link to={`/channel/${userData.name}`} color="#7f8fa6">
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
