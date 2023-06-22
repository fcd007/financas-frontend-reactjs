import React from "react";
import { Link } from "react-router-dom";
import LocalStorageService from "../../infra/service/localStorageService";

const isAuthenticated = () => {
  let usuarioLogado = LocalStorageService.obterItem("_usuario_logado");
  return !!usuarioLogado ? true : false;
};

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand" style={{fontSize: "20px", fontWeight: "bolder"}}>Minhas Finanças</Link>
          <button 
            className="navbar-toggler" 
            type="button" data-toggle="collapse" 
            data-target="#navbarResponsive" 
            aria-controls="navbarResponsive" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              {isAuthenticated() && <Link className="nav-link" to="/">Home</Link>}
              {!isAuthenticated() && <Link className="nav-link" to="/cadastrar-usuarios">Usuários</Link>}
              {isAuthenticated() && <Link className="nav-link" to="/consultar-lancamentos">Lançamentos</Link>}
              {!isAuthenticated() && <Link className="nav-link" to="/login">Login</Link>}
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
