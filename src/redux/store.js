import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducers";

// Create store with rootReducer and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
