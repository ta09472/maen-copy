import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useSelector } from "react-redux";

const Test = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleGoogleClick = async () => {};
  const handleClick = async () => {};
  const fetchPost = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
    console.log("headers", response.headers);
  };
  return (
    <div>
      <button onClick={fetchPost}>post</button>
      <button onClick={handleClick}>google</button>
    </div>
  );
};

export default Test;
