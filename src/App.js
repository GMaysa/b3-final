/** @format */

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biodata from "./pages/Biodata";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import store from "./redux/store";
import { useEffect } from "react";
import PayConfirm from "./pages/PayConfirm";
import Login from "./pages/Login";
import PopupNotif from "./Components/PopupNotif";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Notification from "./Components/Notification";
import FlightTicketHistory from "./Components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import "react-toastify/dist/ReactToastify.css";
import Reset from "./pages/Reset";
import Register from "./pages/Register";
import Otppages from "./pages/Otp";

function App() {
  useEffect(() => {
    function handleContextMenu(e) {
      if (process.env.NODE_ENV !== "development") {
        e.preventDefault(); // prevents the default right-click menu from appearing
      }
    }
    // add the event listener to the component's root element
    const rootElement = document.getElementById("root");
    rootElement.addEventListener("contextmenu", handleContextMenu);
    // remove the event listener when the component is unmounted

    return () => {
      rootElement.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        {showPopup && <PopupNotif onClose={handleClosePopup} />}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchResults />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otppages />} />
          <Route
            path="/edit"
            element={
              // <RedirectIfProtected>
              <EditProfile />
              // </RedirectIfProtected>
            }
          />
          <Route
            path="/profile"
            element={
              // <RedirectIfProtected>
              <Profile />
              // </RedirectIfProtected>
            }
          />
          <Route
            path="/notification"
            element={
              // <RedirectIfProtected>
              <Notification />
              // <RedirectIfProtected>
            }
          />
          <Route
            path="/history"
            element={
              // <RedirectIfProtected>
              <FlightTicketHistory />
              // <RedirectIfProtected>
            }
          />
          <Route
            path="/detail/:bookingCode"
            element={
              // <RedirectIfProtected>
              <DetailHistory />
              // <RedirectIfProtected>
            }
          />
          <Route
            path="/bio"
            element={
              // <RedirectIfProtected>
              <Biodata />
              // </RedirectIfProtected>
            }
          />
          <Route
            path="/payconfirm"
            element={
              // <RedirectIfProtected>
              <PayConfirm />
              // </RedirectIfProtected>
            }
          />
          <Route
            path="/pay"
            element={
              // <RedirectIfProtected>
              <Payment />
              // </RedirectIfProtected>
            }
          />
          <Route
            path="/paysuccess"
            element={
              // <RedirectIfProtected>
              <PaymentSuccess />
              // </RedirectIfProtected>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
