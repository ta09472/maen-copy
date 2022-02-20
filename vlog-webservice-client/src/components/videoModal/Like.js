import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import react, { useState } from "react";
import LikeStyled from "../styled/modalStyled/LikeStyled";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  const cookies = new Cookies();
  const isLoggedIn = cookies.get("isLoggedIn");

  const handleLike = (e) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용가능 합니다.");
      return false;
    }
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };
  return isLiked ? (
    <>
      <LikeStyled>
        <MdFavorite onClick={handleLike} />
      </LikeStyled>
    </>
  ) : (
    <>
      <LikeStyled>
        <MdFavoriteBorder onClick={handleLike} />
      </LikeStyled>
    </>
  );
};

export default Like;
