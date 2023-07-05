/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import book from "./bookingReducers";
import trans from "./transactionReducers";
import seat from "./seatReducers";
import auth from "./auth";

export default combineReducers({
  auth,
  book,
  trans,
  seat,
});
