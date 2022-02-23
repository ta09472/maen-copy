import axios from "axios";
// actiontype
const REQUEST_LIKE = "REQUEST_LIKE";
const REQUEST_LIKE_CANCEL = "REQUEST_LIKE_CANCEL";

//action

export const requestLike = (postsId, userId) => (dispatch) => {
  let data = {
    postsId: postsId,
    userId: userId,
  };
  axios.post("api/v1/post-like", data);
  dispatch({ type: REQUEST_LIKE });
};

export const requestLikeCancel = (postsId, userId, accessToken) => (
  dispatch
) => {
  axios.delete(`http://localhost:8080/api/v1/post-like/${postsId}/${userId}`);
  dispatch({ type: REQUEST_LIKE_CANCEL });
};
// initialState

const initialState = {
  isLiked: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LIKE:
      return {
        ...state,
        isLiked: true,
      };
    case REQUEST_LIKE_CANCEL:
      return {
        ...state,
        isLiked: false,
      };
    default:
      return state;
  }
}
