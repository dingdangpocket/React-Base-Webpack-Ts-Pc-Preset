import { combineReducers } from "redux";
import countReducer from "./countReducer";
import modelReducer from "./modelReducer";

// 将多个reducer合并位一个reducer
export default combineReducers({
  counts: countReducer,
  model: modelReducer,
});
