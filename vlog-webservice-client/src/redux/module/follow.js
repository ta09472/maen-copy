import axios from "axios";
// actiontype
const SET_FOLLOW = "SET_FOLLOW";
const GET_FOLLOWING = "GET_FOLLOWING";
const SET_UNFOLLOW = "SET_UNFOLLOW";
// action
export const setFollow = (userId, targetId) => async (dispatch) => {
  let data = {
    userId: userId,
    followTargetId: targetId,
  };
  const response = await axios.post(`/api/v1/follows`, data);
  dispatch({ type: SET_FOLLOW });
};

export const getFollowing = (userId) => async (dispatch) => {
  const response = await axios.get(`/api/v1/user/${userId}/following`);

  dispatch({
    type: GET_FOLLOWING,
    payload: response.data,
  });
};

export const setUnfollow = (userId, targetId) => async (dispatch) => {
  const response = await axios.delete(`/api/v1/follows/${userId}/${targetId}`);
};
const initialState = {
  isFollow: false,
  followingList: [],
};

export default function reducer(state = initialState, action) {
  switch (state.action) {
    case SET_FOLLOW:
      return {
        ...state,
      };
    case GET_FOLLOWING:
      return {
        ...state,
        followingList: action.payload,
      };
    default:
      return state;
  }
}
