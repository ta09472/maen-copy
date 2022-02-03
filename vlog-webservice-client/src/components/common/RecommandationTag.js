import React from "react";
import RecommandationWrapper from "../styled/commonStyled/RecommandationWrapper";
import RecommandTextWrapper from "../styled/commonStyled/RecommandTextWrapper";
import RecommandationContentStyled from "../styled/commonStyled/RecommandationContentStyled";

const RecommandationTag = () => {
  return (
    <RecommandationWrapper>
      <RecommandTextWrapper>Recommnad Tag</RecommandTextWrapper>
      <RecommandationContentStyled>
        <>
          <a>#Tag1</a>
          <a>#Tag2</a>
          <a>#Tag3</a>
          <a>#Tag4</a>
          <a>#Tag5</a>
        </>
      </RecommandationContentStyled>
    </RecommandationWrapper>
  );
};

export default RecommandationTag;
