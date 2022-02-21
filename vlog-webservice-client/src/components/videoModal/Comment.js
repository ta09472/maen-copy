import React, { useState } from "react";
import UserBlcok from "../common/UserBlock";
import CommentWrapper from "../styled/modalStyled/CommentWrapper";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import UserBlockStlyed from "../styled/commonStyled/UserBlockStyled";
import CommentContent from "../styled/modalStyled/CommentContent";
import EtcButton from "../styled/modalStyled/EtcButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import CommentETC from "./CommentETC";

const Comment = ({ comment, commentId }) => {
  const cookies = new Cookies();
  const userCookie = cookies.get("user");
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const buttonRedner = () => {
    if (!userCookie) {
      return null;
    }
    if (userCookie.name === comment.author) {
      return <EtcButton onClick={handleClick}>...</EtcButton>;
    }
  };
  return (
    <>
      <CommentWrapper>
        <UserBlockStlyed>
          <Link to={`/channel/${comment.author}`}>
            <UserProfileStyled src="" width="32px" height="32px" />
            {comment.author}
          </Link>
        </UserBlockStlyed>
        <CommentContent>
          {comment.contents}
          {buttonRedner()}
        </CommentContent>
        <CommentETC isVisible={isVisible} />
      </CommentWrapper>
    </>
  );
};

export default Comment;
