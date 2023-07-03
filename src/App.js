import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Notification from "./components/Notification";
import FlightTicketHistory from "./components/FlightTicketHistory";
import DetailHistory from "./pages/DetailHistory";
import Biodata from "./pages/Biodata";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchResults />}></Route>
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/history" element={<FlightTicketHistory />} />
          <Route path="/detail" element={<DetailHistory />} />
          <Route path="/biodata" element={<Biodata />}></Route>
          <Route path="/pay" element={<Payment />}></Route>
          <Route path="/paysuccess" element={<PaymentSuccess />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
