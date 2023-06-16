import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Notification from "./Components/Notification";
import FlightTicketHistory from "./Components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifikasi" element={<Notification />} />
        <Route path="/history" element={<FlightTicketHistory />} />
        <Route path="/detail" element={<DetailHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
