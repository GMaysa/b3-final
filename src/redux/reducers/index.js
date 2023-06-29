import { combineReducers } from "@reduxjs/toolkit";

import history from "./historyReducers";
import profile from "./profileReducers";
import notif from "./notifReducers";

export default combineReducers({
  history,
  profile,
  notif,
});
