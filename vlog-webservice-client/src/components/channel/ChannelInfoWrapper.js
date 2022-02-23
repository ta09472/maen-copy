import React, { useState } from "react";
import ChannelInfoStyled from "../styled/channelStyled/ChannelInfoStyled";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import ChannelDetaillWrapper from "../styled/channelStyled/ChannelDetaillWrapper";
import UserName from "../common/UserName";
import ChannelProfile from "./ChannelProfile";
import ChannelDescription from "../channel/ChannelDescription";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";
const ChannelInfoWrapper = () => {
  const { userName } = useParams();

  return (
    <ChannelInfoStyled>
      <ChannelProfile />
      <ChannelDetaillWrapper>
        <h2>{userName}</h2>
        <ChannelDescription />
      </ChannelDetaillWrapper>
    </ChannelInfoStyled>
  );
};

export default ChannelInfoWrapper;
