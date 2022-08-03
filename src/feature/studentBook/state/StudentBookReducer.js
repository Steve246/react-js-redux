import { STUDENT_ADD_BOOK } from "../../../app/constants";

const bookInitialState = {
  student: "",
  books: [],
};

export function studentBookReducer(state = bookInitialState, action) {
  switch (action.type) {
    case STUDENT_ADD_BOOK:
      return Object.assign({}, state, {
        student: action.payload.student,
        books: [...state.books, action.payload.book],
        // books: [...state.books, ...action.payload.book], --> bikin ini biar kebuang spreadnya
      });
    default:
      return state;
  }
}
