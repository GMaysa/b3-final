import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Biodata from './pages/Biodata';
import Header from './components/Header';
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
      </Routes>
      <Routes>
        <Route path='/pay' element={<Payment/>}></Route>
      </Routes>
      <Routes>
        <Route path='/paysuccess' element={<PaymentSuccess/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
