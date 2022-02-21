import axios from "axios";
// actiontypes;
const FETCH_COMMENTS = "FETCH_COMMENTS";
const SUBMIT_COMMENT = "SUBMIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
// action;

export const fetchComments = (post_id) => async (dispatch) => {
  const response = await axios.get(`/api/v1/posts/${post_id}/comments`);
  dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const submitComment = (postsId, userId, input) => async (dispatch) => {
  const data = { postsId: postsId, userId: userId, content: input };
  const response = await axios.post(
    "http://localhost:8080/api/v1/comments",
    data
  );

  let lastComment = await axios.get(
    `api/v1/posts/${postsId}/comments/${response.data + 1}`
  );

  dispatch({ type: SUBMIT_COMMENT, payload: lastComment.data[0] });
};
export const deleteComment = (comment_id, user_id) => async (dispatch) => {
  const response = await axios.delete(
    `api/v1/comment-like/${comment_id}/${user_id}`
  );
  dispatch({ type: DELETE_COMMENT });
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
    case SUBMIT_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    case DELETE_COMMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
