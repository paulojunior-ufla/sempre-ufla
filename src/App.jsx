import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import FerramentasBeneficios from './pages/ferramentasBeneficios/FerramentasBeneficios.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ferramentas-e-beneficios" element={<FerramentasBeneficios/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;