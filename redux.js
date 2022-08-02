//  stored => wadah atau penyimpanan value atau state secara global
// reducer -> berfungsi utk melakukan update store
// action -> proses pemanggilan reducer
// subscription -> pemanggilan stored yang diperlukan

// run pake node redux.js

const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  name: "Doni",
  age: 20,
};

// reducer

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AGE":
      // state.age = state.age + 1;
      // return state;

      return {
        ...state,
        age: state.age + 1,
      };
    // kenapa gak dibawah
    // state.age = state.age + 1
    // return state
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.newName,
      };

    default:
      return state;
  }
};

// store

const store = createStore(rootReducer);
console.log(store.getState());

// subscription

store.subscribe(() => {
  console.log("stored change", store.getState());
});

// abis bikin stored, lgsng subscription baru dispancting action

// dispatching action

store.dispatch({
  type: "ADD_AGE",
});

store.dispatch({
  type: "CHANGE_NAME",
  newName: "Octa",
});

console.log(store.getState());
