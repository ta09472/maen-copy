import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../redux/module/post";
import Post from "./Post";
import PostWrapperStyled from "../styled/mainStyled/PostWrapperStyled";

const Content = () => {
  const [lastPostId, setLastPostId] = useState("");
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  const postList = posts.map((post, index) => (
    <Post key={index} post={post}></Post>
  ));

  return (
    <>
      <PostWrapperStyled>{postList}</PostWrapperStyled>
    </>
  );
};

export default Content;
