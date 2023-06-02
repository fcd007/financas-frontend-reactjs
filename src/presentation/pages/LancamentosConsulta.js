import React from "react";
import { Navigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MESES_ANO from "./../../data/constants/meses";
import TIPO_LANCAMENTO from "./../../data/constants/tipoLancamento";
import SelectList from "../components/SelectList";

class LancamentosConsulta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listaMeses: MESES_ANO,
      tiposLancamento: TIPO_LANCAMENTO,
      filtro: {},
      listaLancamentos: [],
    };
  }

  render() {
    let { shouldRedirect, navetageToRoute, listaMeses, tiposLancamento } =
      this.state;
    return (
      <>
        {shouldRedirect === true ? (
          <Navigate replace to={navetageToRoute} />
        ) : (
          <div className="container">
            <Card value={"card mb-12"} title={"Lançamentos Consulta"}>
              <FormGroup htmlFor="ano" label="Ano:">
                <Row>
                  <Col>
                    <Form.Control
                      style={{ paddingTop: "5px" }}
                      type="text"
                      className="form-control"
                      id="nome"
                      name="nome"
                      aria-describedby="text"
                      placeholder="Digite o ano"
                      value={this.state.nome}
                      onChange={(event) => this.onChangeInput(event)}
                    />
                  </Col>
                  <Col>
                    <SelectList lista={listaMeses} />
                  </Col>
                  <Col>
                    <SelectList lista={tiposLancamento} />
                  </Col>
                </Row>
              </FormGroup>
              <Card value={"card mb-12"}>
                <Row>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Descrição</th>
                        <th>Valor R$</th>
                        <th>Tipo</th>
                        <th>Data</th>
                        <th>Situação</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    {this.state.listaLancamentos.map((lancamento) => {
                      <tr key={lancamento.id}>
                        <td>{lancamento.descricao}</td>
                        <td>{lancamento.valor}</td>
                        <td>{lancamento.tipo}</td>
                        <td>{lancamento.data}</td>
                        <td>{lancamento.situcao}</td>
                        <td>Ações</td>
                      </tr>;
                    })}
                  </Table>
                </Row>
              </Card>
            </Card>
          </div>
        )}
      </>
    );
  }
}

export default LancamentosConsulta;
