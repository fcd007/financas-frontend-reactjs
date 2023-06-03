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
      listaLancamentos: [
        {
          id: 1,
          descricao: "Supermercado",
          valor: "R$150,00",
          tipo: TIPO_LANCAMENTO[0].descricao,
          data: "01/06/2023",
          situacao: "Pendente",
        },
        {
          id: 2,
          descricao: "Padaria",
          valor: "R$15,00",
          tipo: TIPO_LANCAMENTO[0].descricao,
          data: "01/06/2023",
          situacao: "Pendente",
        },
        {
          id: 3,
          descricao: "Farmacia",
          valor: "R$120,00",
          tipo: TIPO_LANCAMENTO[0].descricao,
          data: "01/06/2023",
          situacao: "Pendente",
        },
      ],
    };
  }



  render() {
    let { shouldRedirect, navetageToRoute, listaMeses, tiposLancamento } =
      this.state;
    console.log(this.state.listaLancamentos);
    return (
      <>
        {shouldRedirect === true ? (
          <Navigate replace to={navetageToRoute} />
        ) : (
          <div className="container">
            <Card value={"card mb-12"} title={"Lançamentos Consulta"}>
              <FormGroup htmlFor="ano">
                <Row>
                  <Col>
                    <label htmlFor="ano">Ano:</label>
                    <Form.Control
                      style={{ paddingTop: "16px" }}
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
                    <label htmlFor="mes">Mês:</label>
                    <SelectList lista={listaMeses} />
                  </Col>
                  <Col>
                    <label htmlFor="tipo">Tipo:</label>
                    <SelectList lista={tiposLancamento} />
                  </Col>
                </Row>
              </FormGroup>
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
                  <tbody>
                    {this.state.listaLancamentos.map((lancamento) => (
                      <tr key={lancamento.id}>
                        <td>{lancamento.id}</td>
                        <td>{lancamento.descricao}</td>
                        <td>{lancamento.valor}</td>
                        <td>{lancamento.tipo}</td>
                        <td>{lancamento.data}</td>
                        <td>{lancamento.situacao}</td>
                        <td>Ações</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
            </Card>
          </div>
        )}
      </>
    );
  }
}

export default LancamentosConsulta;
