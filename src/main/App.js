import React from "react";
import "bootswatch/dist/materia/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../presentation/components/Navbar";
import Rotas from "../infra/routes/routes";
import "../styles/theme.css";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Rotas />
      </div>
    </BrowserRouter>
  );
}
