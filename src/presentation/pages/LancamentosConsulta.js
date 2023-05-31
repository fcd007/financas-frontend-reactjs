import React from "react";
import { Navigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { ToastContainer } from "react-toastify";
import { showToastError } from "../components/ToastCustom";
import Container from "../components/Container";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import { Row } from "react-bootstrap";

class LancamentosConsulta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { shouldRedirect, navetageToRoute } = this.state;
    return (
      <>
        {shouldRedirect === true ? (
          <Navigate replace to={navetageToRoute} />
        ) : (
          <div className="container">
            <Card value={"card mb-12"} title={"Lançamentos Consulta"}>
              <FormGroup htmlFor="ano" label="Ano:">
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

              <Row>
                <Table striped bordered hover>
                  <thead>
                    <th>
                      <th></th>
                    </th>
                  </thead>
                </Table>
              </Row>
            </Card>
          </div>
        )}
      </>
    );
  }
}

export default LancamentosConsulta;
