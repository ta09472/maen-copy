import React, { useState } from "react";
import EtcDropDown from "../styled/modalStyled/EtcDropDown";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../redux/module/comment";
import EditButtons from "./EditButtons";

const CommentETC = ({ isVisible, userId, comment }) => {
  const dispatch = useDispatch();

  return (
    <EtcDropDown visible={isVisible}>
      <EditButtons target="comment" comment={comment} />
    </EtcDropDown>
  );
};

export default CommentETC;
