import React from "react";
import AuthService from "../../infra/service/AuthService";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

export default class ContextAutenticacao extends React.Component {

  state = {
    usuarioAutenticado: null,
    isUsuarioAutenticado: false
  }

  iniciarSessao = (usuario) => {
    AuthService.logar(usuario);
    this.setState({ isUsuarioAutenticado: true, usuarioAutenticado: usuario});
  }

  encerrarSessao = () => {
    AuthService.removerUsuarioAutenticado();
    this.setState({ isUsuarioAutenticado: false, usuarioAutenticado: null})
  }

  render() {
    const context = {
      usuarioAutenticado: this.state.usuarioAutenticado,
      isUsuarioAutenticado: this.state.isUsuarioAutenticado,
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