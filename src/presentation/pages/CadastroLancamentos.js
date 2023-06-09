import React from "react";
import { Navigate } from "react-router-dom";
import Card from "../components/Card";
import { Col, Row, Stack } from "react-bootstrap";
import FormGroup from "../components/FormGroup";
import Container from "../components/Container";
import Form from "react-bootstrap/Form";
import SelectList from "../components/SelectList";
import { ToastContainer } from "react-toastify";
import { showToastError, showToastSuccess } from "../components/ToastCustom";
import { MESES_ANO, SITUACAO, TIPO_LANCAMENTO } from "./../../data/constants/index";

import LancamentoService from "../../infra/service/lancamentoService/LancamentoService";
import LocalStorageService from "../../infra/service/localStorageService";

class CadastroLancamentos extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      listaMeses: MESES_ANO,
      tiposLancamento: TIPO_LANCAMENTO,
      listaStatus: SITUACAO,
      id: undefined,
      descricao: undefined,
      data: undefined,
      usuario: undefined,
      valor: undefined,
      status: undefined,
      situacao: undefined
    }
  }

  render() {
    let { shouldRedirect, navetageToRoute, listaMeses, tiposLancamento, listaStatus } = this.state;

    return (
      <>
        <ToastContainer />
        {shouldRedirect === true ? ( <Navigate replace to={navetageToRoute} />) : 
        (<div className="container">
          <Card title="Cadastrar Lançamento">
            <Container>
              <label htmlFor="descricao" >Descrição:</label>
              <Form.Control
                type="text"
                className="form-control"
                id="descricao"
                name="descricao"
                aria-describedby="text"
                placeholder="Descrição de lançamento"
                value={this.state.descricao}
                onChange={(event) =>
                  this.setState({ descricao: event.target.value })
                }
              />
              <Row>
                <Col>
                  <label htmlFor="valor" style={{ paddingTop: "15px" }}>Valor R$:</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="valor"
                    name="valor"
                    aria-describedby="text"
                    placeholder="R$00,00"
                    value={this.state.valor}
                    onChange={(event) =>
                      this.setState({ valor: event.target.value })
                    }
                  />
                </Col>
                <Col>
                  <label htmlFor="tipo" style={{ paddingTop: "15px" }}>Tipo:</label>
                  <SelectList
                    lista={tiposLancamento}
                    value={this.state.tipo}
                    onChange={(event) =>
                      this.setState({ tipo: event.target.value })
                    }
                  />
                </Col>
                <Col>
                  <label htmlFor="mes" style={{ paddingTop: "15px" }}>Mês:</label>
                  <SelectList
                    lista={listaMeses}
                    value={this.state.mes}
                    onChange={(event) =>
                      this.setState({ mes: event.target.value })
                    }
                  />
                </Col>
                <Col>
                  <label htmlFor="situacao" style={{ paddingTop: "15px" }}>Situação:</label>
                  <SelectList
                    lista={listaStatus}
                    value={this.state.situacao}
                    onChange={(event) =>
                      this.setState({ situacao: event.target.value })
                    }
                  />
                  </Col>
                </Row>
                <div style={{ paddingTop: "30px", paddingLeft: "10px" }}>
                  <button
                    id="cadastrar"
                    name="cadastrar"
                    className="btn btn-success"
                    onClick={(event) => this.cadastrar(event)}
                  >
                    Salvar
                  </button>
                  <button
                    id="cancelar"
                    name="cancelar"
                    className="btn btn-danger"
                    style={{ marginLeft: "20px" }}
                    onClick={(event) => this.cancelar(event)}
                  >
                    Cancelar
                  </button>
                </div>
              </Container>
            </Card>
          </div>
        )}
      </>
    )
  }
}

export default CadastroLancamentos;