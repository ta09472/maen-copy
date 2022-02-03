import React, { useEffect } from "react";
import SideWrapper from "../styled/modalStyled/SideWrapper";
import UserBlcok from "../common/UserBlock";
import VideoDescription from "./VideoDescription";
import ContentInfo from "./ContentInfo";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import CommentInput from "./CommentInput";
import UserBlock from "../common/UserBlock";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import UserBlockStlyed from "../styled/commonStyled/UserBlockStyled";
import { useSelector, useDispatch } from "react-redux";
import Tag from "../common/Tag";

const SideContent = ({ isOpened }) => {
  const postDetail = useSelector((state) => state.post.postDetail);
  return (
    <SideWrapper>
      <div>
        {isOpened && (
          <UserBlockStlyed>
            <UserProfileStyled src="" width="32px" height="32px" />
            <p>{postDetail.authorName}</p>
          </UserBlockStlyed>
        )}
      </div>
      <VideoDescription />
      <Tag tag={postDetail.tags}>{postDetail.tags}</Tag>
      <ContentInfo />
      <CommentList />
      <CommentInput />
    </SideWrapper>
  );
};

export default SideContent;
