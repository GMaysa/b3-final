import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biodata from "./pages/Biodata";
import Header from "./components/Header";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import PayConfirm from "./pages/PayConfirm";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
// import Notification from "./Components/Notification";
// import FlightTicketHistory from "./Components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import { ToastContainer } from "react-toastify";
import RedirectIfProtected from "./Components/RedirectIfProtected";

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

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/otp" element={<Otp />} />
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
          />
          <Route path="/bio" element={<Biodata />} />
          <Route path="/payconfirm" element={<PayConfirm />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/paysuccess" element={<PaymentSuccess />} />
        </Routes>

        <ToastContainer theme="colored" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
