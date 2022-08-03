import { createStore } from "redux";
import { rootReducer } from "./rooterReducer";

export default function configureStore() {
  return createStore(rootReducer());
}
