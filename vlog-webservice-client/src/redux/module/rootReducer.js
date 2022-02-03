import { combineReducers } from "redux";
import testReducer from "./test";
import postReducer from "./post";
import searchReducer from "./search";
import commentReducer from "./comment";

export default combineReducers({
  test: testReducer,
  post: postReducer,
  search: searchReducer,
  comment: commentReducer,
});
