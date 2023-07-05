/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import searchFlightsReducers from "./searchFlightsReducers";
import airportData from "./airportReducers";
import history from "./historyReducers";
import profile from "./profileReducers";
import notif from "./notifReducers";
import book from "./bookingReducers";
import trans from "./transactionReducers";
import seat from "./seatReducers";
import auth from "./auth";

export default combineReducers({
  searchFlight: searchFlightsReducers,
  airportData: airportData,
  history,
  profile,
  notif,
  auth,
  book,
  trans,
  seat,
});
