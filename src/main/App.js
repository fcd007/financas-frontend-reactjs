import React from "react";
import "bootswatch/dist/materia/bootstrap.css";
import "../styles/theme.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../presentation/components/Navbar";
import Rotas from "../infra/routes/routes";
import ContextAutenticacao from "../presentation/contexts/ContextAutenticacao";

export function App() {
  return (
    <ContextAutenticacao>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </BrowserRouter>
    </ContextAutenticacao>
  );
}
