import React from "react";
import UserBlcok from "../common/UserBlock";
import CommentWrapper from "../styled/modalStyled/CommentWrapper";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import UserBlockStlyed from "../styled/commonStyled/UserBlockStyled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      <UserBlockStlyed>
        <Link to={`/channel/${comment.author}`}>
          <UserProfileStyled src="" width="32px" height="32px" />
          {comment.author}
        </Link>
      </UserBlockStlyed>
      {comment.contents}
    </CommentWrapper>
  );
};

export default Comment;
