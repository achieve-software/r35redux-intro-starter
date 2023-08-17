// const initialState = {
//     counter:0 //? Global state
// }// const reducer = (state = initialState,action) => {// switch (action.type) {
//     case "INCREASE":
//         return {counter: state.counter + 1}
//     case "DECREASE":
//         return {counter: state.counter -1}
//     case "RESET":
//         return {counter:0}//     default:
//         return state
// }// }// export default reducer

import { combineReducers, legacy_createStore as createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import counterReducer from "./reducers/counterReducer";
const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);
