import React from "react";
import RecommandationContentStyled from "../styled/commonStyled/RecommandationContentStyled";
import UserBlock from "./UserBlock";
import { Link } from "react-router-dom";
import RecommandTextWrapper from "../styled/commonStyled/RecommandTextWrapper";
const RecommandationUser = () => {
  return (
    <>
      <RecommandTextWrapper>Recommnad User</RecommandTextWrapper>
      <RecommandationContentStyled>
        <Link to="/channel">
          <UserBlock />
          <UserBlock />
          <UserBlock />
          <UserBlock />
          <UserBlock />
          <UserBlock />
        </Link>
      </RecommandationContentStyled>
    </>
  );
};

export default RecommandationUser;
