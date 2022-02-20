import React, { useState } from "react";
import InputStyled from "../styled/modalStyled/InputStyled";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { submitComment } from "../../redux/module/comment";

const CommentInput = () => {
  const cookies = new Cookies();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [commentInput, setCommentInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setCommentInput(e.target.value);
  };

  const handleClick = () => {
    if (!isLoggedIn) {
      alert("로그인 후 이용가능 합니다.");
      return false;
    }
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      const userName = cookies.get("user");
      dispatch(submitComment(commentInput));
    }
  };
  return (
    <InputStyled
      placeholder="comment..."
      onClick={handleClick}
      onKeyPress={handleSubmit}
      onChange={handleInput}
    ></InputStyled>
  );
};

export default CommentInput;
