import React, { useState } from "react";

import axios from "axios";
import Cookies from "universal-cookie";
const Test = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get("user").accessToken;
  const refreshToken = cookies.get("user").refreshToken;
  const user = cookies.get("user");
  const authorization = "Authorization";
  console.log(user);
  console.log(accessToken);
  console.log(refreshToken);
  const handleClick = async () => {
    const response = await axios.get("/api/v1/jwt/refresh", {
      body: {
        refreshToken: refreshToken,
      },
    });
    console.log(response);
  };
  return (
    <>
      <input type="text" placeholder="..." />
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Test;
