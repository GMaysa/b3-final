/** @format */

import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Notification from "./Components/Notification";
import FlightTicketHistory from "./Components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";
import Biodata from "./pages/Biodata";
import Payment from "./pages/Payment";
import Otp from "./pages/Otp";
import PaymentSuccess from "./pages/PaymentSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import RedirectIfProtected from "./Components/RedirectIfProtected";
// import RedirectIfProtected from "./Components/RedirectIfProtected";
// import Protected from "./Components/Protected";
// import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import PopupNotif from "./Components/PopupNotif";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Provider store={store}>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search" element={<SearchResults />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/reset" element={<Reset />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/history" element={<FlightTicketHistory />} />
            <Route path="/detail/:bookingCode" element={<DetailHistory />} />
            {/* <Route path="/notification" element={<Notification />} />  */}
            {/* <Route path="/history" element={<FlightTicketHistory />} />  */}
            {/* <Route path="/detail" element={<DetailHistory />} /> */}

            <Route
              path="/biodata"
              element={
                <RedirectIfProtected>
                  {" "}
                  <Biodata />
                </RedirectIfProtected>
              }
            ></Route>

            <Route path="/pay" element={<Payment />}></Route>
            <Route path="/paysuccess" element={<PaymentSuccess />}></Route>
          </Routes>

          <ToastContainer theme="colored" />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
