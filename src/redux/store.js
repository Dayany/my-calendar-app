import { createStore } from "redux";
import rootReducer from "./reducers";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(rootReducer);

export default store;
