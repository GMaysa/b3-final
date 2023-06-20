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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifikasi" element={<Notification />} />
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
