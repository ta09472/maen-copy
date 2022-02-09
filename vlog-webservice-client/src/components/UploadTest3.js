import React, { useState, useEffect } from "react";
import ButtonWrapper from "./styled/uploadStyled/ButtonWrapper";
import UploadButtonStyled from "./styled/uploadStyled/UploadButtonStyled";
import UploadWrapper from "./styled/uploadStyled/UploadWrapper";
import InputWrapper from "./styled/uploadStyled/InputWrapper";
import DescriptionInput from "./styled/uploadStyled/DescriptionInput";
import CaptionInput from "./styled/uploadStyled/CaptionInput";
import PostForm from "./upload/PostForm";
import UploaderStyled from "./styled/uploadStyled/UploaderStyled";
import PostFormStyled from "./styled/uploadStyled/PostFormStyled";
import FormStyled from "./styled/uploadStyled/FormStyled";
import { useNavigate } from "react-router-dom";

const UploadTest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <UploadWrapper>
        <form
          method="post"
          action="http://localhost:8080/api/v1/posts/"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <FormStyled>
            <PostFormStyled>
              <h3>Upload Your Days</h3>
              <UploaderStyled>
                <input multiple type="file" name="video" />
              </UploaderStyled>
            </PostFormStyled>
            <InputWrapper>
              <input type="text" name="userId" placeholder="userid" />
              태그 구분은 #로 합니다.
              <CaptionInput type="text" name="tags" placeholder="Input Tags" />
              <DescriptionInput
                type="text"
                name="description"
                placeholder="Description"
              />
              <ButtonWrapper>
                <UploadButtonStyled>upload</UploadButtonStyled>
              </ButtonWrapper>
            </InputWrapper>
          </FormStyled>
        </form>
      </UploadWrapper>
    </>
  );
};

export default UploadTest;
