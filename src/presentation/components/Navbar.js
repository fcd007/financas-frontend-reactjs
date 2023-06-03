import React from "react";
import { Link } from "react-router-dom";

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
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/cadastrar-usuarios">Usuários</Link>
              <Link className="nav-link" to="/consultar-lancamentos">Lançamentos</Link>
              <Link className="nav-link" to="/login">Login</Link>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
