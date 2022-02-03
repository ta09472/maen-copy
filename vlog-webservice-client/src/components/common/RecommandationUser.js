import React from "react";
import RecommandationContentStyled from "../styled/commonStyled/RecommandationContentStyled";
import UserBlock from "./UserBlock";
import { Link } from "react-router-dom";

const RecommandationUser = () => {
  return (
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
  );
};

export default RecommandationUser;
