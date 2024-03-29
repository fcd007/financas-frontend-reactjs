import React from "react";
import { Navigate } from "react-router-dom";
import UsuarioService from "../../infra/service/usuarioService/UsuarioService";
import { ToastContainer} from 'react-toastify';
import { showToastError } from "../components/ToastCustom";
import { formatarEmRealBrasileiro } from "../../data/utils/NumberFormat"
import { AuthContext } from "../contexts/ContextAutenticacao";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      saldo: 0,
      usuario: {},
    };
  }

  componentDidMount() {
    const usuario = this.context.usuarioAutenticado;
    if(!!usuario) {
      UsuarioService.obterSaldoPorUsuarioId(usuario.id)
      .then((response) => {
        this.setState({ saldo: response.data, usuarioId: usuario });
      })
      .catch((error) => {
        showToastError(error.response.data);
      });
    }else {
      const shouldRedirect = true;
      let navetageToRoute = "";
        navetageToRoute = "/login";
        this.setState({ shouldRedirect, navetageToRoute });
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
                title="Cadastrar Usuário"
                id="usuarios"
                name="usuarios"
                className="btn btn-primary btn-lg fa fa-users"
                onClick={(event) => this.prepararCadastrar(event)}
              ><i className="bi bi-person-plus"></i> Usuário</button>
              <button
                style={{marginLeft: "30px"}}
                title="Cadastrar Lançamento"
                id="lancamento"
                name="lancamento"
                className="btn btn-danger btn-lg fa fa-users"
                onClick={(event) => this.prepararLancamento(event)}
              ><i className="bi bi-file-earmark-plus"></i> Lançamento</button>
            </p>
          </div>
        )}
      </>
    );
  }
}

Home.contextType = AuthContext;

export default Home;
