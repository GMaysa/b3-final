import { combineReducers } from "@reduxjs/toolkit";
import searchFlightsReducers from "./searchFlightsReducers";
import airportData from "./airportReducers";

export default combineReducers({
    searchFlight: searchFlightsReducers,
    airportData: airportData
})