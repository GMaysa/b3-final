import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Biodata from './pages/Biodata';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Biodata/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
