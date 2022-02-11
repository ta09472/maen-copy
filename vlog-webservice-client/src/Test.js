import React, { useState } from "react";

const Test = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(inputs));

    const getUser = localStorage.getItem("user");

    // 다시 Object로 변환
    const userInfo = JSON.parse(getUser);
    console.log(userInfo);
  };
  return (
    <div>
      <input
        type="text"
        name="email"
        onChange={(e) =>
          setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
          })
        }
      />
      <input
        type="text"
        name="password"
        onChange={(e) =>
          setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
          })
        }
      />
      <button onClick={handleClick} name="password">
        localstorage
      </button>
    </div>
  );
};

export default Test;
