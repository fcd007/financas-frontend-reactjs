import React from "react";
import FormGroup from "./FormGroup";
import Button from "./Button";

class Formulario extends React.Component {
  
  state = {
    email: '',
    password: '',
  };

  onChangeInput = (event) => {
    let valor = event.target.value;
    if(event.target.id === 'email') {
      this.setState({ email: valor });
    }else {
      this.setState({ password: valor });
    }
  }

  
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <fieldset>
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
              <Button
                title="Entrar"
                className="btn btn-success"
                onClick={this.login}
              />
              <Button
                title="Cadastrar"
                className="btn btn-danger"
                onClick={this.login}
              />
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
