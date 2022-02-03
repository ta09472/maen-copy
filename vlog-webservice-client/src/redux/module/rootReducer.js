import { combineReducers } from "redux";
import postReducer from "./post";
import searchReducer from "./search";
import commentReducer from "./comment";

export default combineReducers({
  post: postReducer,
  search: searchReducer,
  comment: commentReducer,
});
