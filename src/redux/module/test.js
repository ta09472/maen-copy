import axios from "axios";
// actiontypes

export const FETCH_DATA = "FETCH_DATA";
export const UPLOAD_DATA = "UPLOAD_DATA";

// action

export const fetchData = () => async (dispatch) => {
  const response = await axios.get("v1/api/v1/posts");
  dispatch({ type: FETCH_DATA, payload: response.data });
};

// initialState

const initialState = {
  posts: [],
  input: "",
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}
