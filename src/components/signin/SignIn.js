import React from "react";
import SigninWrapper from "../styled/signinStyled/SigninWrapper";
import IconWrapper from "../styled/signinStyled/IconWrapper";
import SignIconBlock from "../styled/signinStyled/SignIconBlock";
import GlobalWrapper from "../styled/commonStyled/GlobalWrapper";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { createPortal } from "react-dom";
import OverlayStyled from "../styled/modalStyled/OverlayStyled";
import SigninModalStyled from "../styled/signinStyled/SigninModalStyled";
import CloseButton from "../styled/modalStyled/CloseButton";
import { MdClose } from "react-icons/md";

const SignIn = ({ isOpened, children, onClose }) => {
  if (!isOpened) {
    return null;
  }
  return createPortal(
    <GlobalWrapper>
      <OverlayStyled></OverlayStyled>

      <SigninModalStyled>
        <CloseButton onClick={onClose}>
          <MdClose color="black" />
        </CloseButton>

        <SigninWrapper>
          <div>
            <p>Join in MAEN</p>
          </div>

          <IconWrapper>
            <SignIconBlock>
              <FcGoogle />
            </SignIconBlock>
            Login with Google
          </IconWrapper>
          <IconWrapper>
            <SignIconBlock>
              <RiKakaoTalkFill />
            </SignIconBlock>
            Login with KakaoTalks
          </IconWrapper>
          <IconWrapper>
            <SignIconBlock>
              <FaFacebook />
            </SignIconBlock>
            Login with Facebook
          </IconWrapper>
        </SigninWrapper>
      </SigninModalStyled>
    </GlobalWrapper>,
    document.getElementById("signin")
  );
};

export default SignIn;
