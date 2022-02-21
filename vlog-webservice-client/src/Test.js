import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

const Test = () => {
  const src =
    "https://lh3.googleusercontent.com/a-/AOh14Gi49qx7W7Ft1w48NwZockqQxv65qdtuViEefu_Q=s96-c";
  return (
    <div>
      <img src={src} />
    </div>
  );
};

export default Test;
