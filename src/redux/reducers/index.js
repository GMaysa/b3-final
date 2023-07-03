/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import searchFlightsReducers from "./searchFlightsReducers";
import airportData from "./airportReducers";
import auth from "./auth";
import history from "./historyReducers";
import profile from "./profileReducers";
import notif from "./notifReducers";

export default combineReducers({
  searchFlight: searchFlightsReducers,
  airportData: airportData,
  history,
  profile,
  notif,
});
