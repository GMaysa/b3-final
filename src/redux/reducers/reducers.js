import { combineReducers } from "redux";
import {
  UPDATE_CUSTOMER_DATA,
  UPDATE_PASSENGERS_DATA,
} from "../actions/actions";

// Reducer for customer data
const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Reducer for passengers data
const passengersReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PASSENGERS_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  customer: customerReducer,
  passengers: passengersReducer,
});

export default rootReducer;
