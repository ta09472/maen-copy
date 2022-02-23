import React from "react";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import Cookies from "universal-cookie";

const ChannelProfile = () => {
  const cookies = new Cookies();

  return (
    <UserProfileStyled src={cookies.get("user").picture}></UserProfileStyled>
  );
};

export default ChannelProfile;
