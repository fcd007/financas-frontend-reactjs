import React from 'react';
import 'bootswatch/dist/materia/bootstrap.css';
import '../styles/theme.css';

import Rotas from '../infra/routes';

class App extends React.Component {
  render() {
    return (
     <Rotas />
    );
  }
}

export default App;
