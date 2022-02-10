import axios from "axios";
//actiontype

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGOUT_REQUEST = "LOGOUT_REQUEST";

// action

export const loginRequest = (user) => async (dispatch) => {
  const response = await axios.get("url");
  dispatch({ type: LOGIN_REQUEST, payload: response.data });
};

export const logoutRequset = (user) => async (dispatch) => {
  const response = await axios.get("url");
  dispatch({ type: LOGOUT_REQUEST });
};
// initialState

const initialState = {
  isLoggedIn: true,
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
