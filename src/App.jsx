import { useState } from "react";
import PaginaDetallesProducto from "./components/view/PaginaDetallesProducto";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomeShoping from "./components/view/HomeShoping";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/react-app" element={<HomeShoping />} />
          <Route path="/react-app/detalles-producto/:id" element={<PaginaDetallesProducto />} />
          <Route path="*" element={<p>No encontrado!</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
