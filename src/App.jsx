import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Philosophy from './pages/Philosophy';
import Atelier from './pages/Atelier';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/atelier" element={<Atelier />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
