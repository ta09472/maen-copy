import axios from "axios";
// actiontypes;
const FETCH_COMMENTS = "FETCH_COMMENTS";

// action;

export const fetchComments = (post_id) => async (dispatch) => {
  const response = await axios.get(`/api/v1/posts/${post_id}/comments`);
  dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

// initialState
const initialState = {
  comments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}
