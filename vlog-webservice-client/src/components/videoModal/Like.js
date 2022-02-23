import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import react, { useState } from "react";
import LikeStyled from "../styled/modalStyled/LikeStyled";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { requestLike, requestLikeCancel } from "../../redux/module/like";

const Like = () => {
  const dispatch = useDispatch();
  const { postsId } = useSelector((state) => state.post.postDetail);
  const [isLiked, setIsLiked] = useState(false);
  const cookies = new Cookies();
  const isLoggedIn = cookies.get("isLoggedIn");
  const user = cookies.get("user");

  const handleLike = (e) => {
    if (!isLoggedIn) {
      alert("로그인 후 이용가능 합니다.");
      return false;
    }
    if (!isLiked) {
      dispatch(requestLike(postsId, user.userId));
      setIsLiked(true);
    } else {
      dispatch(requestLikeCancel(postsId, user.userId, user.accessToken));
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
