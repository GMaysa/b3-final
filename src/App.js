import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Notification from "./Components/Notification";
import FlightTicketHistory from "./Components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";
import Biodata from './pages/Biodata';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset'; 
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       {/* <Header/> */}
        <Routes>
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/history" element={<FlightTicketHistory />} />
          <Route path="/detail/:bookingCode" element={<DetailHistory />} />
        <Route path='' element={<Reset/>}></Route>
        <Route path='/biodata' element={<Biodata/>}></Route>
        <Route path='/pay' element={<Payment/>}></Route>
        <Route path='/paysuccess' element={<PaymentSuccess/>}></Route>
     </Routes>
      </BrowserRouter>
    </Provider>

  );
}
export default App;
