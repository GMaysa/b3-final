import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
