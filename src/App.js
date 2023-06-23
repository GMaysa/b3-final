import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Notification from "./components/Notification";
import FlightTicketHistory from "./components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";
import Biodata from './pages/Biodata';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset'; 

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Reset/>}></Route>
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/history" element={<FlightTicketHistory />} />
        <Route path="/detail" element={<DetailHistory />} />
        <Route path='/biodata' element={<Biodata/>}></Route>
        <Route path='/pay' element={<Payment/>}></Route>
        <Route path='/paysuccess' element={<PaymentSuccess/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
