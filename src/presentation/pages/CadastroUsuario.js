import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import Container from "../components/Container";
import { Navigate } from "react-router-dom";

class CadastroUsuario extends React.Component {
  constructor(props) {
    super(props);

    this.prepareCancelar = this.prepareCancelar.bind(this);
    this.prepareCadastrar = this.prepareCadastrar.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

    this.state = {
      nome: "",
      email: "",
      password: "",
      repeat: "",
      shouldRedirect: false,
      navetageToRoute: undefined,
    };
  }

  onChangeInput = (event) => {
    let valor = event.target.value;
    let id = event.target.id;

    this.setState({ [id]: valor });
  };

  prepareCadastrar = (event) => {
    const shouldRedirect = true;
    let id = event.target.id;
    let navetageToRoute = id;

    if (id === "cadastrar") {
      console.log(navetageToRoute, shouldRedirect);
    }
  };

  prepareCancelar = (event) => {
    const shouldRedirect = true;
    let navetageToRoute = "";
    let id = event.target.id;

    if (id === "cancelar") {
      navetageToRoute = "/login";
      this.setState({ shouldRedirect, navetageToRoute });
    }
  };

  render() {
    let { shouldRedirect, navetageToRoute } = this.state;

    return (
      <>
        {shouldRedirect === true ? (
          <Navigate replace to={navetageToRoute} />
        ) : (
          <div className="container">
            <Card title="Cadastro de Usuário">
              <Container>
                <FormGroup htmlFor="nome" label="Nome: *">
                  <input
                    style={{ paddingTop: "5px" }}
                    type="text"
                    className="form-control"
                    id="nome"
                    name="nome"
                    aria-describedby="text"
                    placeholder="Digite seu nome completo"
                    value={this.state.nome}
                    onChange={(event) => this.onChangeInput(event)}
                  />
                </FormGroup>
                <FormGroup htmlFor="email" label="Email: *">
                  <input
                    style={{ paddingTop: "5px" }}
                    type="email"
                    className="form-control"
                    id="email"
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
                    id="password"
                    aria-describedby="password"
                    placeholder="Digite sua senha"
                    value={this.state.password}
                    onChange={(event) => this.onChangeInput(event)}
                  />
                </FormGroup>
                <FormGroup htmlFor="password" label="Repetir a Senha: *">
                  <input
                    style={{ paddingTop: "5px" }}
                    type="password"
                    className="form-control"
                    id="repeat"
                    name="repeat"
                    aria-describedby="repeat"
                    placeholder="Digite repita sua senha"
                    value={this.state.repeat}
                    onChange={(event) => this.onChangeInput(event)}
                  />
                </FormGroup>
                <div style={{ padding: "10px" }}>
                  <button
                    id="cadastrar"
                    name="cadastrar"
                    className="btn btn-success"
                    onClick={(event) => this.prepareCadastrar(event)}
                  >
                    Salvar
                  </button>
                  <button
                    id="cancelar"
                    name="cancelar"
                    className="btn btn-danger"
                    style={{ marginLeft: "20px" }}
                    onClick={(event) => this.prepareCancelar(event)}
                  >
                    Cancelar
                  </button>
                </div>
              </Container>
            </Card>
          </div>
        )}
      </>
    );
  }
}

export default CadastroUsuario;
