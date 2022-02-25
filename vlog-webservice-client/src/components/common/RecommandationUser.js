import React, { useState, useEffect } from "react";
import RecommandationContentStyled from "../styled/commonStyled/RecommandationContentStyled";
import UserBlock from "./UserBlock";
import { Link } from "react-router-dom";
import RecommandTextWrapper from "../styled/commonStyled/RecommandTextWrapper";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecommendUsers } from "../../redux/module/recommend";

const RecommandationUser = () => {
  const dispatch = useDispatch();
  const userNameList = ["철수", "짱구", "훈이"];

  useEffect(() => {
    dispatch(fetchRecommendUsers());
  }, []);

  const userList = userNameList.map((user, index) => (
    <Link to={`/channel/${user}`} key={index}>
      <UserBlock key={index} userName={user} src={user} />
    </Link>
  ));

  return (
    <>
      <RecommandTextWrapper>Recommnad User</RecommandTextWrapper>
      <RecommandationContentStyled>{userList}</RecommandationContentStyled>
    </>
  );
};

export default RecommandationUser;
