import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Notification from "./Components/Notification";
import FlightTicketHistory from "./Components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Header/> */}
        <Navbar />
        <Routes>
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/history" element={<FlightTicketHistory />} />
          <Route path="/detail" element={<DetailHistory />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
