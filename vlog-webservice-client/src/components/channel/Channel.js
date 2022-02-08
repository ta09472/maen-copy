import React from "react";
import SideNav from "../common/SideNav";
import ChannelWrapperStyled from "../styled/channelStyled/ChannelWrapperStyled";
import ChannelContentWrapper from "../styled/channelStyled/ChannelContentWrapper";
import ChannelInfoWrapper from "./ChannelInfoWrapper";
import Blank from "../styled/channelStyled/Blank";
import Content from "../main/Content";
import ContentWrapper from "../styled/mainStyled/ContentWrapper";

const Channel = () => {
  return (
    <ChannelWrapperStyled>
      <Blank></Blank>
      <SideNav />
      <ContentWrapper>
        <ChannelInfoWrapper />
        <Content />
      </ContentWrapper>
    </ChannelWrapperStyled>
  );
};

export default Channel;
