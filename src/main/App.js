import React from "react";
import "bootswatch/dist/materia/bootstrap.css";
import "../styles/theme.css";
import Navbar from "../presentation/components/Navbar";

import Rotas from "../infra/routes";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </>
    );
  }
}

export default App;
