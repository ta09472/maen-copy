import React from "react";
import SideNav from "../common/SideNav";
import ChannelWrapperStyled from "../styled/channelStyled/ChannelWrapperStyled";
import ChannelContentWrapper from "../styled/channelStyled/ChannelContentWrapper";
import ChannelInfoWrapper from "./ChannelInfoWrapper";

import Content from "../main/Content";
import ContentWrapper from "../styled/mainStyled/ContentWrapper";

const Channel = () => {
  return (
    <ChannelWrapperStyled>
      <SideNav />
      <ContentWrapper>
        <ChannelInfoWrapper />
        <Content />
      </ContentWrapper>
    </ChannelWrapperStyled>
  );
};

export default Channel;
