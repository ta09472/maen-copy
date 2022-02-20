import React from "react";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import UserBlockStlyed from "../styled/commonStyled/UserBlockStyled";
import Cookies from "universal-cookie";
const UserBlock = ({ userName }) => {
  return (
    <UserBlockStlyed>
      <UserProfileStyled src="" width="32px" height="32px" />
      <p>{userName}</p>
    </UserBlockStlyed>
  );
};

export default UserBlock;
