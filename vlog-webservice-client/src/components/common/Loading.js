import React, { useEffect } from "react";
import Loader from "../main/Loader";
import LoadingWrapper from "../styled/commonStyled/LoadingWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getCode, loginRequest } from "../../redux/module/login";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = useSelector((state) => state.login.code);

  useEffect(() => {
    const params = new URL(window.location.href).searchParams.get("code");

    dispatch(getCode(params));
    console.log(params);
    const user = {
      username: "abc",
      email: "abc@gmail.com",
    };
    dispatch(loginRequest(user));
    navigate("/");
  }, []);
  return (
    <LoadingWrapper>
      <Loader />
      <div>잠시만 기다려주세요...</div>
    </LoadingWrapper>
  );
};

export default Loading;
