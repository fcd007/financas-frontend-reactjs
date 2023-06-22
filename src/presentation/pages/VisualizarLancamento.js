import React from "react";
import { Navigate } from "react-router-dom";
import Card from "../components/Card";
import { Col, Row } from "react-bootstrap";
import Container from "../components/Container";
import Form from "react-bootstrap/Form";
import SelectList from "../components/SelectList";
import { MESES_ANO, STATUS, TIPO_LANCAMENTO } from "../../data/constants/index";
import LocalStorageService from "../../infra/service/localStorageService";

class VisualizarLancamento extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listaMeses: MESES_ANO,
      tiposLancamento: TIPO_LANCAMENTO,
      listaStatus: STATUS,
      usuario: undefined,
      id: !!this.props.lancamento ? this.props.lancamento.id : undefined,
      descricao: !!this.props.lancamento ? this.props.lancamento.descricao : '',
      dia: !!this.props.lancamento ? this.props.lancamento.dia : '',
      ano: !!this.props.lancamento ? this.props.lancamento.ano : '',
      mes: !!this.props.lancamento ? this.props.lancamento.mes : '',
      valor: !!this.props.lancamento ? this.props.lancamento.valor : '',
      tipo: !!this.props.lancamento ? this.props.lancamento.tipo : '',
      status: !!this.props.lancamento ? this.props.lancamento.status : '',
      atualizar: !!this.props.lancamento ? !!this.props.lancamento.id  : false
    }
  }

  componentDidMount() {
    let usuario = LocalStorageService.obterItem("_usuario_logado");
    
    if(!usuario) {
      const shouldRedirect = true;
      let navetageToRoute = "";
      navetageToRoute = "/login";
      this.setState({ shouldRedirect, navetageToRoute });
    }
  }

  render() {
    let { shouldRedirect, navetageToRoute, listaMeses, tiposLancamento, listaStatus } = this.state;

    return (
      <>
        {shouldRedirect === true ? (
          <Navigate replace to={navetageToRoute} />
        ) : (
          <div className="container">
            <Card title="Cadastrar Lançamento">
              <Container>
                <label htmlFor="descricao">Descrição:</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="descricao"
                  name="descricao"
                  aria-describedby="text"
                  placeholder="Descrição de lançamento"
                  value={this.state.descricao}
                  disabled={true}
                  onChange={(event) =>
                    this.setState({ descricao: event.target.value })
                  }
                />
                <Row>
                  <Col>
                    <label htmlFor="valor" style={{ paddingTop: "15px" }}>
                      Valor R$:
                    </label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="valor"
                      name="valor"
                      aria-describedby="text"
                      placeholder="R$00,00"
                      value={this.state.valor}
                      disabled={true}
                      onChange={(event) => this.onChangeInput(event)}
                    />
                  </Col>
                  <Row>
                    <Col>
                        <label htmlFor="dia" style={{ paddingTop: "15px" }}>
                          Dia
                        </label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          id="dia"
                          name="dia"
                          aria-describedby="text"
                          placeholder="01"
                          value={this.state.dia}
                          disabled={true}
                          onChange={(event) => this.onChangeInput(event)}
                        />
                      </Col>
                      <Col>
                          <label htmlFor="mes" style={{ paddingTop: "15px" }}>
                            Mês:
                          </label>
                          <SelectList
                            lista={listaMeses}
                            value={this.state.mes}
                            disabled={true}
                            onChange={(event) =>
                            this.setState({ mes: event.target.value })}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="ano" style={{ paddingTop: "15px" }}>
                          Ano
                        </label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          id="ano"
                          name="ano"
                          aria-describedby="text"
                          placeholder="2023"
                          value={this.state.ano}
                          disabled={true}
                          onChange={(event) => this.onChangeInput(event)}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="tipo" style={{ paddingTop: "15px" }}>
                          Tipo:
                        </label>
                        <SelectList
                          lista={tiposLancamento}
                          value={this.state.tipo}
                          disabled={true}
                          onChange={(event) =>
                          this.setState({ tipo: event.target.value })
                        }
                        />
                      </Col>
                      <Col>
                        <label htmlFor="status" style={{ paddingTop: "15px" }}>
                          Situação:
                        </label>
                        <SelectList
                          lista={listaStatus}
                          value={this.state.status}
                          disabled={true}
                          onChange={(event) =>
                          this.setState({ status: event.target.value })
                        }
                      />
                    </Col>
                  </Row>
                </Row>
                <div style={{ paddingTop: "30px", paddingLeft: "10px" }}>
                  <button id="cancelar" name="cancelar" className="btn btn-danger" onClick={(event) => this.props.voltar(event)} ><i className="bi bi-arrow-left-square"></i> Voltar</button>
                </div>
              </Container>
            </Card>
          </div>
        )}
      </>
    );
  }
}

export default VisualizarLancamento;
