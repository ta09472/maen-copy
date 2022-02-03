import React, { useState } from "react";
import TagWrapper from "../styled/commonStyled/TagWrapper";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../../redux/module/search";
import { useNavigate } from "react-router-dom";

const Tag = ({ tag, children }) => {
  const keyword = useSelector((state) => state.search.input);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    dispatch(setInput(tag));
    navigate("/search");
  };
  return (
    <div>
      <TagWrapper onClick={handleClick} data-name={children}>
        {children}
      </TagWrapper>
    </div>
  );
};

export default Tag;
