import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditButtons = ({ target, postsId }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    switch (target) {
      case "post":
        console.log(postsId);
        return console.log("postedelete");

      case "comment":
        return console.log("commentDelete");
    }
  };
  const handleEdit = () => {
    switch (target) {
      case "post":
        navigate("/upload");
      case "comment":
        return console.log("commentEdit");
    }
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <button
        onClick={handleEdit}
        style={{
          border: "none",
          color: "#2f3640",
          backgroundColor: "white",
        }}
      >
        {target} 수정
      </button>
      <button
        onClick={handleDelete}
        style={{
          border: "none",
          color: "#e84118",
          backgroundColor: "white",
        }}
      >
        {target} 삭제
      </button>
    </div>
  );
};

export default EditButtons;
