import React from "react";
import FormGroup from "./FormGroup";

class Formulario extends React.Component {

  render() {
    return(
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <fieldset>
                <FormGroup htmlFor="inputEmail" label="Email: *">
                  <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Digite o e-mail"/>
                </FormGroup>
                <FormGroup htmlFor="inputPassword" label="Senha: *">
                  <input type="password" className="form-control" id="password" aria-describedby="password" placeholder="Digite sua senha"/>
                </FormGroup>
            </fieldset>
          </div>
        </div>
      </div>
    )
  }
}

export default Formulario;