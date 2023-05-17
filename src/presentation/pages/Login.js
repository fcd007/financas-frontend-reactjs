import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import Container from "../components/Container";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.prepararCadastrar = this.prepararCadastrar.bind(this);
    this.prepararEntrar = this.prepararEntrar.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

    this.state = {
      email: "",
      senha: "",
      shouldRedirect: false,
      navetageToRoute: undefined,
      mensagemErro: null
    };
  }

  prepararCadastrar(event) {
    const shouldRedirect = true;
    let navetageToRoute = "";
    let id = event.target.id;

    if (id === "cadastrar") {
      navetageToRoute = "/cadastrar-usuarios";
      this.setState({ shouldRedirect, navetageToRoute });
    }
  }

  prepararEntrar(event) {
    let { email, senha } = this.state;
    const shouldRedirect = true;
    let navetageToRoute = "";
    let id = event.target.id;

    if (id === "login") {
      axios
        .post(`http://localhost:8080/api/v1/usuarios/autenticarUsuario`, {
          email,
          senha,
        }).then((response) => {
          if(!!response) {
            let usuario_data = JSON.stringify(response.data);
            localStorage.setItem("_usuario_logado", usuario_data)

            navetageToRoute = "/home";
            this.setState({ shouldRedirect, navetageToRoute });
          }
        }).catch((error) => {
          this.setState({ mensagemErro: error.response.data });
        });
    }
  }

  onChangeInput = (event) => {
    let valor = event.target.value;
    let id = event.target.id;

    this.setState({ [id]: valor });
  };

  render() {
    let { shouldRedirect, navetageToRoute } = this.state;
    return (
      <>
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
                    <div className="row">
                      <span>{this.state.mensagemErro}</span>
                    </div>
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
                      <FormGroup htmlFor="password" label="Senha: *">
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
