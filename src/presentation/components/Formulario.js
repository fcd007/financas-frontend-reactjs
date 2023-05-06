import React from "react";
import FormGroup from "./FormGroup";

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);

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

  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <fieldset>
            <div style={{padding: '20px'}}>
              <FormGroup htmlFor="email" label="Email: *">
                <input
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
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="password"
                  placeholder="Digite sua senha"
                  value={this.state.password}
                  onChange={(event) => this.onChangeInput(event)}
                />
              </FormGroup>
              </div>
              <div style={{padding: '10px'}}>
                <button className="btn btn-success" onClick={(event) => this.handleOnClick(event)}>Entrar</button>
                <button className="btn btn-danger" style={{marginLeft: '20px'}} onClick={(event) => this.handleOnClick(event)}>Cadastrar</button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
