import React from 'react';
import Login from './presentation/pages/Login';
import CadastroUsuario from './presentation/pages/CadastroUsuario';
import 'bootswatch/dist/materia/bootstrap.css';
import './styles/theme.css';

class App extends React.Component {
  render() {
    return (
     <CadastroUsuario />
    );
  }
}

export default App;
