import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../../presentation/templates/Page404";
import Login from "../../presentation/pages/Login";
import CadastroUsuario from "../../presentation/pages/CadastroUsuario";
import Home from "../../presentation/pages/Home";
import LancamentosConsulta from "../../presentation/pages/LancamentosConsulta";
import CadastroLancamentos from "../../presentation/pages/CadastroLancamentos";

function Rotas() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar-usuarios" element={<CadastroUsuario />} />
      <Route index path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/consultar-lancamentos" element={<LancamentosConsulta />} />
      <Route path="/cadastrar-lancamentos" element={<CadastroLancamentos />} />
      <Route path="/atualizar-lancamento/:id" element={<CadastroLancamentos />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Rotas;
