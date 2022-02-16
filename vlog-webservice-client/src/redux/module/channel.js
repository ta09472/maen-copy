import axios from "axios";

//actiontypes

const FETCH_CHANNEL = "FETCH_CHANNEL";

//action

export const fetchChannel = () => async (dispatch) => {
  const response = await axios.get("url");
  dispatch({ type: FETCH_CHANNEL, payload: response.data });
};

//initialState
const initialState = {
  channel_data: {},
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHANNEL:
      return {
        ...state,
        channel_data: action.payload,
      };
    default:
      return state;
  }
}
