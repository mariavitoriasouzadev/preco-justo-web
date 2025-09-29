import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Rotas futuras */}
        {/* <Route path="/categorias" element={<Categorias />} /> */}
        {/* <Route path="/fornecedores" element={<Fornecedores />} /> */}
        {/* <Route path="/sobre" element={<Sobre />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
