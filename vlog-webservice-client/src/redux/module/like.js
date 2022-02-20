import axios from "axios";
// actiontype
const TOGGLE_LIKE = "TOGGLE_LIKE";

//action

export const toggleLike = (postsId, userId) => (dispatch) => {
  axios.post("api/v1/post-like", {});
  dispatch({ type: TOGGLE_LIKE });
};

// initialState

const initialState = {
  isLiked: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LIKE:
      return {
        ...state,
        isLiked: !state.isLiked,
      };
    default:
      return state;
  }
}
