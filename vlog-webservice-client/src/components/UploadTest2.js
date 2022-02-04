import React, { useState } from "react";
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
import axios from "axios";

const UploadTest = () => {
  /* tag 분리 하는 로직 */
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.keyCode == 32) {
      setTag("");
    }
    setTag(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode == 32) {
      setTagList([...tagList, tag]);

      console.log(tagList);
    }
  };

  const [inputs, setInputs] = useState({
    userId: "",
    tags: "",
    description: "",
    file: "",
  });

  const { userId, tags, description } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const video = e.target.files[0];
    setInputs({
      ...inputs,
      [e.target.name]: video,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", inputs.file);
    formData.append("userId", inputs.userId);
    formData.append("tags", inputs.tags);
    formData.append("description", inputs.description);

    fetch("/api/v1/posts/", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        //handle success
        console.log("성공", res);
      })
      .catch((res) => {
        //handle error
        console.log(res);
      });
  };

  return (
    <>
      <UploadWrapper>
        <FormStyled
          method="post"
          action="http://localhost:8080/api/v1/posts"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <PostFormStyled>
            <h3>Upload Your Days</h3>
            <UploaderStyled>
              <input
                multiple
                type="file"
                name="file"
                onChange={handleFileChange}
              />
            </UploaderStyled>
          </PostFormStyled>
          <InputWrapper>
            <input
              type="text"
              name="userId"
              placeholder="userid"
              value={userId}
              onChange={onChange}
            />
            <CaptionInput
              type="text"
              name="tags"
              placeholder="Input Tags"
              value={tags}
              onChange={onChange}
              data-tag={tag}
              onKeyDown={handleKeyDown}
            />
            <DescriptionInput
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={onChange}
            />
            <ButtonWrapper>
              <UploadButtonStyled>upload</UploadButtonStyled>
            </ButtonWrapper>
          </InputWrapper>
        </FormStyled>
      </UploadWrapper>
    </>
  );
};

export default UploadTest;
