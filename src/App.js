import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Biodata from './pages/Biodata';
import Header from './components/Header';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useEffect } from "react";

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
    </Provider>
  );
}

export default App;
