import { combineReducers } from "redux";
import { studentReducer } from "../feature/student/state/StudentReducer";

export function rootReducer() {
  return combineReducers({
    studentReducer,
  });
}
