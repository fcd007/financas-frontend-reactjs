import React from "react";
import FormGroup from "./FormGroup";
import Container from "./Container"

class FormularioLogin extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

    this.state = {
      email: "",
      password: "",
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
            id="password"
            name="password"
            aria-describedby="password"
            placeholder="Digite sua senha"
            value={this.state.password}
            onChange={(event) => this.onChangeInput(event)}
          />
        </FormGroup>
        <div style={{padding: '10px'}}>
          <button className="btn btn-success" onClick={(event) => this.handleOnClick(event)}>Entrar</button>
          <button className="btn btn-danger" style={{marginLeft: '20px'}} onClick={(event) => this.handleOnClick(event)}>Cadastrar</button>
        </div>
      </Container>
    );
  }
}

export default FormularioLogin;
