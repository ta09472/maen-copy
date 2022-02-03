import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../redux/module/post";
import Post from "../main/Post";
import PostWrapperStyled from "../styled/mainStyled/PostWrapperStyled";

const Content = () => {
  const posts = useSelector((state) => state.post.posts);
  const [isRecent, setIsRecent] = useState(false);
  const dispatch = useDispatch();

  const recentPost = posts.sort((a, b) => {
    const sortingField = "views";
    return b[sortingField] - a[sortingField];
  });

  const recentPostList = posts.map((post, index) => (
    <Post key={index} post={post}></Post>
  ));

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return <PostWrapperStyled>{recentPostList}</PostWrapperStyled>;
};

export default Content;
