import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
// import Notification from "./Components/Notification";
// import Notification from "./Components/Notification.jsx";
// import FlightTicketHistory from "./Components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";
import Biodata from './pages/Biodata';
import Payment from './pages/Payment';
import Otp from "./pages/Otp";
import PaymentSuccess from './pages/PaymentSuccess';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset'; 
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import RedirectIfProtected from "./components/RedirectIfProtected";
import Protected from "./components/Protected";
import Header from "./components/Header";


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>

    <Header/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/reset' element={<Reset/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/otp" element={<Otp />} />
        {/* <Route path="/notification" element={<Notification />} />  */}
        {/* <Route path="/history" element={<FlightTicketHistory />} />  */}
        {/* <Route path="/detail" element={<DetailHistory />} /> */}

        <Route 
          path='/biodata' 
          element={
          <RedirectIfProtected> <Biodata/></RedirectIfProtected>
        }></Route>

        <Route path='/pay' element={<Payment/>}></Route>
        <Route path='/paysuccess' element={<PaymentSuccess/>}></Route>
      </Routes>

      <ToastContainer theme="colored"/>
    </BrowserRouter>
    </Provider>
  );
}
export default App;
