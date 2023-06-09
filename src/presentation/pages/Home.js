import React from "react";
import { Navigate } from "react-router-dom";
import UsuarioService from "../../infra/service/usuarioService/UsuarioService";
import LocalStorageService from "../../infra/service/localStorageService";
import { ToastContainer} from 'react-toastify';
import { showToastError } from "../components/ToastCustom";
import { formatarEmRealBrasileiro } from "../../data/utils/NumberFormat"

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.UsuarioService = new UsuarioService();

    this.state = {
      saldo: 0,
      usuario: {},
    };
  }

  componentDidMount() {
    let usuario = LocalStorageService.obterItem("_usuario_logado");
    if(!!usuario) {
      this.UsuarioService.obterSaldoPorUsuarioId(usuario.id)
      .then((response) => {
        this.setState({ saldo: response.data, usuarioId: usuario });
      })
      .catch((error) => {
        showToastError(error.response.data);
      });
    }
  }

  prepararCadastrar = (event) => {
    const shouldRedirect = true;
    let navetageToRoute = "";
    let id = event.target.id;

    if (id === "usuarios") {
      navetageToRoute = "/cadastrar-usuarios";
      this.setState({ shouldRedirect, navetageToRoute });
    }
  }

  prepararLancamento = (event) => {
    const shouldRedirect = true;
    let navetageToRoute = "";
    let id = event.target.id;

    if (id === "lancamento") {
      navetageToRoute = "/cadastrar-lancamentos";
      this.setState({ shouldRedirect, navetageToRoute });
    }
  }

  render() {
    let { shouldRedirect, navetageToRoute } = this.state;
    return (
      <>
        <ToastContainer />
        {shouldRedirect === true ? (
          <Navigate replace to={navetageToRoute} />
        ) : (
          <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">Esse é seu sistema de finanças.</p>
            <p className="lead">
              Seu saldo para o mês atual é de {formatarEmRealBrasileiro(this.state.saldo)}
            </p>
            <hr className="my-4" />
            <p>
              E essa é sua área administrativa, utilize um dos menus ou botões
              abaixo para navegar pelo sistema.
            </p>
            <p className="lead">
              <button
                id="usuarios"
                name="usuarios"
                className="btn btn-primary btn-lg fa fa-users"
                onClick={(event) => this.prepararCadastrar(event)}
              >
                Cadastrar Usuário
              </button>
              <button
                id="lancamento"
                name="lancamento"
                className="btn btn-danger btn-lg fa fa-users"
                onClick={(event) => this.prepararLancamento(event)}
              >
                Cadastrar Lançamento
              </button>
            </p>
          </div>
        )}
      </>
    );
  }
}

export default Home;
