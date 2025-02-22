import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import FerramentasBeneficios from './pages/ferramentasBeneficios/FerramentasBeneficios.jsx';
import Duvidas from './pages/duvidas/Duvidas.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ferramentas-e-beneficios" element={<FerramentasBeneficios/>} />
        <Route path="/duvidas" element={<Duvidas/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;