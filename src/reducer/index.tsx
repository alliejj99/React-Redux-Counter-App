import { combineReducers } from "redux";
import todo from "./todo";
import counter from "./counter";
import post from "./post";

const rootReducer = combineReducers({
  todo,
  counter,
  post,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
