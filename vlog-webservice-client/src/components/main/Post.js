import React, { useState, useEffect } from "react";
import PostStyled from "../styled/mainStyled/PostStyled";
import UserBlock from "../common/UserBlock";
import VideoModal from "../videoModal/VideoModal";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { MdFavorite } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import { toggleModal } from "../../redux/module/post";
import ContentInfo from "../videoModal/ContentInfo";
import axios from "axios";
import { fetchDetailPost } from "../../redux/module/post";
import UserBlockStlyed from "../styled/commonStyled/UserBlockStyled";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import ThumbnailWrapper from "../styled/mainStyled/ThumbnailWrapper";
import Tag from "../common/Tag";
import { fetchComments } from "../../redux/module/comment";

const Post = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postTag, setPostTag] = useState(post);
  const postDetail = useSelector((state) => state.post.postDetail);
  const dispatch = useDispatch();

  const toggleModal = () => {
    const postId = post.postsId;
    setIsModalOpen(!isModalOpen);
    dispatch(fetchDetailPost(post.postsId));
    dispatch(fetchComments(`${postId}`));
    document.body.style.overflow = "auto";
  };
  /* 나중에 리스트로 태그 컴포넌트 만들어야함 */
  return (
    <>
      <PostStyled onClick={toggleModal}>
        <ThumbnailWrapper
          width="100%"
          height="80%"
          src={`http://localhost:8080/api/v1/posts/thumbnail/${post.thumbnailName}`}
        />
        <UserBlockStlyed>
          <UserProfileStyled width="32px" height="32px" src="" />
          <p>{post.authorName}</p>
        </UserBlockStlyed>
        <MdFavorite /> :{post.postsLike}
        <MdPlayArrow /> : {post.views}
        <Tag tag={post.tags}>{post.tags} </Tag>
      </PostStyled>

      <VideoModal
        isOpened={isModalOpen}
        onClose={toggleModal}
        videoSrc={post.thumbnailName}
      ></VideoModal>
    </>
  );
};

export default Post;
