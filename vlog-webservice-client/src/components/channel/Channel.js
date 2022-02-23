import React, { useState, useEffect } from "react";
import SideNav from "../common/SideNav";
import ChannelWrapperStyled from "../styled/channelStyled/ChannelWrapperStyled";
import ChannelContentWrapper from "../styled/channelStyled/ChannelContentWrapper";
import ChannelInfoWrapper from "./ChannelInfoWrapper";
import Content from "../main/Content";
import ContentWrapper from "../styled/mainStyled/ContentWrapper";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";

const Channel = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:1024px)",
  });

  document.body.style.overflow = "auto";

  useEffect(() => {});
  return (
    <ChannelWrapperStyled>
      {isMobile ? null : <SideNav />}
      <ContentWrapper>
        <ChannelInfoWrapper />
      </ContentWrapper>
    </ChannelWrapperStyled>
  );
};

export default Channel;
