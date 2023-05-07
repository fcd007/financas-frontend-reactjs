import React from "react";
import Card from "../components/Card";
import FormularioCadastroUsuario from "../components/FormularioCadastroUsuario";

class CadastroUsuario extends React.Component{

  render() {
    return (
      <div className="container">
      <Card title="Cadastro de Usuário" >
        <FormularioCadastroUsuario />
      </Card>
      </div>
    )
  }
}

export default CadastroUsuario;