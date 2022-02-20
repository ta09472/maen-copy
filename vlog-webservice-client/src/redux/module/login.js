import axios from "axios";
//actiontype

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGOUT_REQUEST = "LOGOUT_REQUEST";
const GET_CODE = "GET_CODE";
const SEND_CODE = "SEND_CODE";
const GET_PATH = "GET_PATH";
// action

export const loginRequest = (user) => async (dispatch) => {
  /*const response = await axios.get("url");  */
  dispatch({ type: LOGIN_REQUEST, payload: user });
};

export const logoutRequset = (user) => async (dispatch) => {
  const response = await axios.post("url", user);
  dispatch({ type: LOGOUT_REQUEST });
};

export const getCode = (code) => (dispatch) => {
  dispatch({ type: GET_CODE, payload: code });
};

export const getPath = (path) => async (dispatch) => {
  dispatch({ type: GET_PATH, payload: path });
};

// initialState

const initialState = {
  isLoggedIn: false,
  user: {},
  code: null,
  path: "",
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
        user: {},
      };
    case GET_CODE:
      return {
        ...state,
        code: action.payload,
      };
    case GET_PATH:
      return {
        ...state,
        path: action.payload,
      };
    default:
      return state;
  }
}
