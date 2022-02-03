import axios from "axios";
// actiontypes

export const FETCH_POST = "FETCH_POST";

// action

export const fetchPost = () => async (dispatch) => {
  const response = await axios.get("/api/v1/posts/");
  dispatch({ type: FETCH_POST, payload: response.data });
};

// initialState

const initialState = {
  posts: [],
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}
