import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

const Test = () => {
  useEffect(() => {
    axios
      .get("api/v1/posts/1/comments")

      .then((response) => console.log(response));
  });
  return <div></div>;
};

export default Test;
