import axios from "axios";

//actiontypes

const FETCH_CHANNEL = "FETCH_CHANNEL";

//action

export const fetchChannel = (userId) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:8080/api/v1/user/${userId}/posts/`
  );
  console.log(response);
  dispatch({ type: FETCH_CHANNEL, payload: response.data });
};

//initialState
const initialState = {
  myPost: [],
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNEL:
      return {
        ...state,
        myPost: action.payload,
      };
    default:
      return state;
  }
}
