import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import Container from "../components/Container";
import UsuarioService from "../../infra/service/usuarioService/UsuarioService";
import { ToastContainer} from 'react-toastify';
import { showToastError } from "../components/ToastCustom";
import { AuthContext } from "../contexts/ContextAutenticacao";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      shouldRedirect: false,
      navetageToRoute: undefined,
      mensagemErro: null,
      showMensagem: null,
      usuarioLogado: false
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

  entrar = (event) => {
    let { email, senha } = this.state;
    let navetageToRoute = "";

      UsuarioService.autenticar({ email, senha })
        .then((response) => {
          if (!!response) {
            let usuarioLogado = true;
            let shouldRedirect = true;
            this.context.iniciarSessao(response.data);
            navetageToRoute = "/home";
            this.setState({ usuarioLogado, shouldRedirect, navetageToRoute });
          }
        })
        .catch((error) => {
          showToastError(error.response.data);
        });
  };

  onChangeInput = (event) => {
    let valor = event.target.value;
    let id = event.target.id;

    this.setState({ [id]: valor });
  };

  render() {
    
    return (
      <>
        <ToastContainer />
        {this.state.shouldRedirect === true ? (
          <Navigate replace to={this.state.navetageToRoute} />
        ) : 
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
                        <button id="login" name="login" className="btn btn-success" onClick={(event) => this.entrar(event)}>
                          <i className="bi bi-door-open"></i> Entrar</button>
                        <button id="cadastrar" name="cadastrar" className="btn btn-danger" style={{ marginLeft: "20px" }} onClick={(event) => this.prepararCadastrar(event)}
                        ><i className="bi bi-person-plus"></i> Cadastrar</button>
                      </div>
                    </Container>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        }
      </>
    );
  }
}

Login.contextType = AuthContext;

export default Login;
