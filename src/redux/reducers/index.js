import { combineReducers } from "@reduxjs/toolkit";
import data from "./airportReducers";
import book from "./bookingReducers"
import trans from "./transactionReducers"

export default combineReducers({
  data,
  book,
  trans,
});
