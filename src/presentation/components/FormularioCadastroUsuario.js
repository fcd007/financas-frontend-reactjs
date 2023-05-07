import React from "react";
import FormGroup from "./FormGroup";

class FormularioCadastroUsuario extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

    this.state = {
      nome: "",
      email: "",
      password: "",
      repeat: "",
    };
  }

  onChangeInput = (event) => {
    let valor = event.target.value;
    let id = event.target.id;

    this.setState({ [id]: valor });
  };

  handleOnClick(event) {
    console.log('====================================');
    console.log(this.state);
    console.log('====================================');
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <fieldset>
              <div style={{ padding: "20px" }}>
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
              </div>
              <div style={{padding: '10px'}}>
                <button className="btn btn-success" onClick={(event) => this.handleOnClick(event)}>Salvar</button>
                <button className="btn btn-danger" style={{marginLeft: '20px'}} onClick={(event) => this.handleOnClick(event)}>Cancelar</button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default FormularioCadastroUsuario;
