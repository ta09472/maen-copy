import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import react, { useState } from "react";
import LikeStyled from "../styled/modalStyled/LikeStyled";

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };
  return isLiked ? (
    <div>
      <LikeStyled onClick={() => handleLike()}>
        <MdFavorite />
      </LikeStyled>
    </div>
  ) : (
    <div>
      <LikeStyled onClick={() => handleLike()}>
        <MdFavoriteBorder />
      </LikeStyled>
    </div>
  );
};

export default Like;
