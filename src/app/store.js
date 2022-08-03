import { createStore } from "redux";
import { rootReducer } from "./rooterReducer";

export function configureStore() {
  return createStore(rootReducer());
}
