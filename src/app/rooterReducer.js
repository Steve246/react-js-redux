import { combineReducers } from "redux";
import { studentReducer } from "../feature/student/state/StudentReducer";
import { studentBookReducer } from "../feature/studentBook/state/StudentBookReducer";

export function rootReducer() {
  return combineReducers({
    studentReducer,
    bookReducer: studentBookReducer,
  });
}
