import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import Container from "../components/Container";
import { Navigate } from "react-router-dom";
import UsuarioService from "../../infra/service/usuarioService/UsuarioService";
import { ToastContainer } from "react-toastify";
import { showToastError, showToastSuccess } from "../components/ToastCustom";

class CadastroUsuario extends React.Component {
  constructor(props) {
    super(props);

    this.UsuarioService = new UsuarioService();

    this.state = {
      nome: "",
      email: "",
      senha: "",
      repeat: "",
      shouldRedirect: false,
      navetageToRoute: undefined,
      atualizar: this.props.atualizar || false
    };
  }

  validar() {
    const mensagens = [];
    let { nome, email, senha, repeat } = this.state;

    if (!nome) {
      mensagens.push("O campo nome é obrigatório.");
    }

    if (!email) {
      mensagens.push("O campo email é obrigatório.");
    } else if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      mensagens.push("Informe um email válido.");
    }

    if (!senha || !repeat) {
      mensagens.push("Digite a senha 2 vezes.");
    } else if (senha !== repeat) {
      mensagens.push(
        "As senhas não são iguais. por favor digite novamente as senhas."
      );
    }

    return mensagens;
  }

  onChangeInput = (event) => {
    let valor = event.target.value;
    let id = event.target.id;

    this.setState({ [id]: valor });
  };

  cadastrar = (event) => {
    let { nome, email, senha } = this.state;
    const usuario = { nome, email, senha };
    const shouldRedirect = true;
    let navetageToRoute = "/login";

    const mensagens = this.validar();

    if(mensagens && mensagens.length > 0) {
      mensagens.forEach((msg, index) => {
        showToastError(msg);
      });

      return false;
    }

    this.UsuarioService.salvarUsuario(usuario)
      .then((response) => {
        showToastSuccess("Usuário cadastrado com sucesso!");
        setTimeout(() => {
          this.setState({ shouldRedirect, navetageToRoute });
        }, 5000);
      })
      .catch((error) => {
        showToastError(error.response.data);
      });
  };

  cancelar = (event) => {
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
        <ToastContainer />
        {shouldRedirect === true ? (
          <Navigate replace to={navetageToRoute} />
        ) : (
          <div className="container">
            <Card title={this.state.atualizar ? "Atualizar de Usuário" : "Cadastrar de Usuário"}>
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
                    id="senha"
                    aria-describedby="password"
                    placeholder="Digite sua senha"
                    value={this.state.senha}
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
                    onClick={(event) => this.cadastrar(event)}
                  >
                    Salvar
                  </button>
                  <button
                    id="cancelar"
                    name="cancelar"
                    className="btn btn-danger"
                    style={{ marginLeft: "20px" }}
                    onClick={(event) => this.cancelar(event)}
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
