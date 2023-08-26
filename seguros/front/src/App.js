import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
