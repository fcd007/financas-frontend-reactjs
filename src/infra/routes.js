import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../presentation/templates/Page404";
import Login from "../presentation/pages/Login";
import CadastroUsuario from "../presentation/pages/CadastroUsuario";

function Rotas() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Rotas;
