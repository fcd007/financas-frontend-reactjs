import React from "react";
import { Navigate } from "react-router-dom";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import Container from "../components/Container";
import UsuarioService from "../../infra/service/usuarioService/UsuarioService";
import LocalStorageService from "../../infra/service/localStorageService";
import { ToastContainer} from 'react-toastify';
import { showToastError } from "../components/ToastCustom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.UsuarioService = new UsuarioService();

    this.state = {
      email: "",
      senha: "",
      shouldRedirect: false,
      navetageToRoute: undefined,
      mensagemErro: null,
      showMensagem: null,
    };
  }

  prepararCadastrar = (event) => {
    const shouldRedirect = true;
    let navetageToRoute = "";
    let id = event.target.id;

    if (id === "cadastrar") {
      navetageToRoute = "/cadastrar-usuarios";
      this.setState({ shouldRedirect, navetageToRoute });
    }
  };

  prepararEntrar = (event) => {
    let { email, senha } = this.state;

    const shouldRedirect = true;
    let navetageToRoute = "";
    let id = event.target.id;

    if (id === "login") {
      this.UsuarioService.autenticar({ email, senha })
        .then((response) => {
          if (!!response) {
            LocalStorageService.addItem("_usuario_logado", response.data);

            navetageToRoute = "/home";
            this.setState({ shouldRedirect, navetageToRoute });
          }
        })
        .catch((error) => {
          showToastError(error.response.data);
        });
    }
  };

  onChangeInput = (event) => {
    let valor = event.target.value;
    let id = event.target.id;

    this.setState({ [id]: valor });
  };

  render() {
    let { shouldRedirect, navetageToRoute } = this.state;
    return (
      <>
        <ToastContainer />
        {shouldRedirect === true ? (
          <Navigate replace to={navetageToRoute} />
        ) : (
          <div className="container">
            <div className="row">
              <div
                className="col-md-6"
                style={{ position: "relative", left: "300px" }}
              >
                <div className="bs-docs-section">
                  <Card title="Login">
                    <Container>
                      <FormGroup htmlFor="email" label="Email: *">
                        <input
                          style={{ paddingTop: "5px" }}
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          aria-describedby="email"
                          placeholder="Digite o e-mail"
                          value={this.state.email}
                          onChange={(event) => this.onChangeInput(event)}
                        />
                      </FormGroup>
                      <FormGroup htmlFor="senha" label="Senha: *">
                        <input
                          style={{ paddingTop: "5px" }}
                          type="password"
                          className="form-control"
                          id="senha"
                          name="senha"
                          aria-describedby="password"
                          placeholder="Digite sua senha"
                          value={this.state.senha}
                          onChange={(event) => this.onChangeInput(event)}
                        />
                      </FormGroup>
                      <div style={{ padding: "10px" }}>
                        <button
                          id="login"
                          name="login"
                          className="btn btn-success"
                          onClick={(event) => this.prepararEntrar(event)}
                        >
                          Entrar
                        </button>
                        <button
                          id="cadastrar"
                          name="cadastrar"
                          className="btn btn-danger"
                          style={{ marginLeft: "20px" }}
                          onClick={(event) => this.prepararCadastrar(event)}
                        >
                          Cadastrar
                        </button>
                      </div>
                    </Container>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Login;
