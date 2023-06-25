import React from "react";
import AuthService from "../../infra/service/AuthService";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

export default class ContextAutenticacao extends React.Component {

  state = {
    usuarioAutenticado: null,
    isAutenticado: false
  }

  iniciarSessao = (usuario) => {
    AuthService.logar(usuario);
    this.setState({ isAutenticado: true, usuarioAutenticado: usuario});
  }

  encerrarSessao = () => {
    AuthService.removerUsuarioAutenticado();
    this.setState({ isAutenticado: false, usuarioAutenticado: null})
  }

  render() {
    const context = {
      usuarioAutenticado: this.state.usuarioAutenticado,
      isAutenticado: this.state.isAutenticado,
      iniciarSessao: this.iniciarSessao,
      encerrarSessao: this.encerrarSessao,
    }

    return(
      <AuthProvider value={context}>
        {this.props.children}
      </AuthProvider>
    )
  }
}