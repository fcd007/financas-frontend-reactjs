import React from "react";
import "bootswatch/dist/materia/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../presentation/components/Navbar";
import Rotas from "../infra/routes";
import "../styles/theme.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
