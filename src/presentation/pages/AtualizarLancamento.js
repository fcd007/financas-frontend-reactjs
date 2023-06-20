import React from "react";
import Card from "../components/Card";
import { Col, Row } from "react-bootstrap";
import Container from "../components/Container";
import Form from "react-bootstrap/Form";
import SelectList from "../components/SelectList";
import { ToastContainer } from "react-toastify";
import { MESES_ANO, STATUS, TIPO_LANCAMENTO } from "../../data/constants/index";
import LancamentoService from "../../infra/service/lancamentoService/LancamentoService";
import { showToastError, showToastSuccess } from "../components/ToastCustom";
import LocalStorageService from "../../infra/service/localStorageService";

class AtualizarLancamento extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listaMeses: MESES_ANO,
      tiposLancamento: TIPO_LANCAMENTO,
      listaStatus: STATUS,
      usuario: undefined,
      id: this.props.lancamento.id,
      descricao: this.props.lancamento.descricao,
      dia: this.props.lancamento.dia,
      ano: this.props.lancamento.ano,
      mes: this.props.lancamento.mes,
      valor: this.props.lancamento.valor,
      tipo: this.props.lancamento.tipo,
      status: this.props.lancamento.status,
      atualizar: this.props.lancamento.id
    }
  }

  onChangeInput = (event) => {
    let valor = event.target.value;
    let id = event.target.id;

    this.setState({ [id]: valor });
  };

  voltar = () => {
    const shouldRedirect = true;
    let navetageToRoute = "/consultar-lancamentos";
    this.setState({ shouldRedirect, navetageToRoute });
  }

  atualizar = () => {
    const shouldRedirect = true;
    let navetageToRoute = "/consultar-lancamentos";

    let usuarioLogado = LocalStorageService.obterItem("_usuario_logado");
    let usuario = usuarioLogado.id;
    let { id, descricao, dia, ano, mes, valor, tipo, status } = this.state;
    let lancamento = { id, descricao, dia, mes, ano, valor, tipo, status, usuario };

    const mensagens = this.validar();

    if(mensagens && mensagens.length > 0) {
      mensagens.forEach((msg, index) => {
        showToastError(msg);
      });

      return false;
    }

    LancamentoService.atualizar(lancamento.id, lancamento)
      .then((response) => {
        showToastSuccess("Lançamento cadastrado com sucesso!");
        setTimeout(() => {
          this.setState({ shouldRedirect, navetageToRoute });
        }, 3000);
      })
      .catch((error) => {
        showToastError(error.response.data.message);
      });
  };

  validar() {
    const mensagens = [];
    let { descricao, ano, mes, valor, tipo, status } = this.state;

    if (!descricao) {
      mensagens.push("O campo descrição é obrigatório.");
    }

    if (!valor) {
      mensagens.push("O campo valor é obrigatório.");
    }

    if (!status) {
      mensagens.push("O campo situação é obrigatório.");
    }

    if (!tipo) {
      mensagens.push("O campo tipo é obrigatório.");
    }

    if (!mes) {
      mensagens.push("O campo mes é obrigatório.");
    }

    if (!ano) {
      mensagens.push("O campo ano é obrigatório.");
    }

    return mensagens;
  }

  render() {
    let { listaMeses, tiposLancamento, listaStatus } = this.state;

    return (
      <>
        <ToastContainer />
        <div className="container">
            <Card title="Atualizar Lançamento">
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
                          onChange={(event) =>
                          this.setState({ status: event.target.value })
                        }
                      />
                    </Col>
                  </Row>
                </Row>
                <div style={{ paddingTop: "30px", paddingLeft: "10px" }}>
                  <button id="atualizar" name="atualizar" className="btn btn-success" onClick={(event) => this.atualizar(event)} >Atualizar</button>
                  <button id="cancelar" name="cancelar" className="btn btn-danger" style={{ marginLeft: "20px" }} onClick={(event) => this.props.voltar(event)} >Cancelar</button>
                </div>
              </Container>
            </Card>
          </div>
      </>
    );
  }
}

export default AtualizarLancamento;