import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Biodata from './pages/Biodata';
import Header from './components/Header';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Biodata/>}></Route>
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
