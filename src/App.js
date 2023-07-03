/** @format */

import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Notification from "./Components/Notification";
import FlightTicketHistory from "./Components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";
import Navbar from "./Components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import { Provider } from "react-redux";
import PopupNotif from "./Components/PopupNotif";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        {/* {showPopup && <PopupNotif onClose={handleClosePopup} />} */}
        <Routes>
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/history" element={<FlightTicketHistory />} />
          <Route path="/detail/:bookingCode" element={<DetailHistory />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}
export default App;
