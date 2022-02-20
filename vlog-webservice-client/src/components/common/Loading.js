import React, { useEffect } from "react";
import Loader from "../main/Loader";
import LoadingWrapper from "../styled/commonStyled/LoadingWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getCode, loginRequest } from "../../redux/module/login";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import axios from "axios";

const Loading = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = useSelector((state) => state.login.code);
  const path = useSelector((state) => state.login.path);
  const user = useSelector((state) => state.login.user);

  useEffect(async () => {
    const authCode = new URL(window.location.href).searchParams.get("code");

    const response = await axios.get(
      `http://localhost:8080/api/v1/jwt/${path}`,
      {
        params: {
          code: authCode,
        },
      }
    );
    console.log(path);
    dispatch(loginRequest(response.data));
    cookies.set("user", response.data, { path: "/" });
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
