import { combineReducers } from "@reduxjs/toolkit";
import data from "./airportReducers";
import book from "./bookingReducers";
import trans from "./transactionReducers";
import seat from "./seatReducers";

export default combineReducers({
  data,
  book,
  trans,
  seat,
});
