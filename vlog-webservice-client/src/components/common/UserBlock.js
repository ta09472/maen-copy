import React from "react";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import UserBlockStlyed from "../styled/commonStyled/UserBlockStyled";

const UserBlock = ({ userName, src, children, userId }) => {
  return (
    <UserBlockStlyed>
      <UserProfileStyled src={src} width="32px" height="32px" />
      {userName}
    </UserBlockStlyed>
  );
};

export default UserBlock;
