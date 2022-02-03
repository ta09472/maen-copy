import React from "react";
import UploadStyled from "../styled/commonStyled/UploadStyled";
import UploadButtonStyled from "../styled/commonStyled/UploadButtonStyled";
import { MdAddCircle } from "react-icons/md";
import { Route, Routes, Link } from "react-router-dom";

const UploadButton = () => {
  return (
    <UploadStyled>
      <UploadButtonStyled>
        <Link to="/uploadtest">
          <MdAddCircle />
        </Link>
      </UploadButtonStyled>
    </UploadStyled>
  );
};

export default UploadButton;
