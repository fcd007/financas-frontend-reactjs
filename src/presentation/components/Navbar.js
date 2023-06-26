import React from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../contexts/ContextAutenticacao";

function Navbar(props) {
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
              {/* rotas abertas sem autenticacao */}
              {!props.isUsuarioAutenticado  && <Link className="nav-link" to="/login">Login</Link>}
              {!props.isUsuarioAutenticado  && <Link className="nav-link" to="/cadastrar-usuarios">Usuário</Link>}
              {/* rotas fechadas apenas com autenticacao */}
              {props.isUsuarioAutenticado && <Link className="nav-link" to="/">Home</Link>}
              {props.isUsuarioAutenticado  && <Link className="nav-link" to="/consultar-lancamentos">Lançamentos</Link>}
              {props.isUsuarioAutenticado  && <a onClick={props.encerrarSessao} className="nav-link" href="/login">Sair</a>}
            </ul>
          </div>
        </div>
      </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <AuthConsumer>
    {(context) => <Navbar isUsuarioAutenticado={context.isUsuarioAutenticado} deslogar={context.encerrarSessao}/>}
  </AuthConsumer>
);
