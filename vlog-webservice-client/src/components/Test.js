import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../redux/module/post";
import Post from "./main/Post";

const Test = () => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  const postList = posts.map((post, index) => (
    <Post key={index} post={post}></Post>
  ));
  return <div>{postList}</div>;
};

export default Test;
