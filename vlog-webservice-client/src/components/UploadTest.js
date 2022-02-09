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
    video: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video", inputs.video);
    formData.append("userId", inputs.userId);
    formData.append("tags", inputs.tags);
    formData.append("description", inputs.description);

    await axios
      .post("http://localhost:8080/api/v1/posts/", formData, {
        headers: {
          encType: "multipart/form-data",
        },
      })
      .then((res) => {
        //handle success
        navigate("/");
      })
      .catch((err) => {
        //handle error
        navigate("/");
      });
  };

  return (
    <>
      <UploadWrapper>
        <form onSubmit={handleSubmit}>
          <FormStyled>
            <PostFormStyled>
              <h3>Upload Your Days</h3>
              <UploaderStyled>
                <input
                  multiple
                  type="file"
                  name="video"
                  onChange={handleFileChange}
                />
              </UploaderStyled>
            </PostFormStyled>
            <InputWrapper>
              <input
                type="text"
                name="userId"
                placeholder="userid"
                value={inputs.userId}
                onChange={onChange}
              />
              <CaptionInput
                type="text"
                name="tags"
                placeholder="Input Tags"
                value={inputs.tags}
                onChange={onChange}
                onKeyDown={handleKeyDown}
              />
              <DescriptionInput
                type="text"
                name="description"
                placeholder="Description"
                value={inputs.description}
                onChange={onChange}
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
