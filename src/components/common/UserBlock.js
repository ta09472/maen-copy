import React from "react";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import UserName from "./UserName";
import UserBlockStlyed from "../styled/commonStyled/UserBlockStyled";

const UserBlock = () => {
  return (
    <UserBlockStlyed>
      <UserProfileStyled
        src="../../public/logo192.png"
        width="32px"
        height="32px"
      />
      <p>username</p>
    </UserBlockStlyed>
  );
};

export default UserBlock;
