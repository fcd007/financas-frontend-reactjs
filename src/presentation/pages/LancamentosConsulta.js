import React from "react";
import { Navigate } from "react-router-dom";
import { Col, Row, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SelectList from "../components/SelectList";
import { showToastError, showToastSuccess } from "../components/ToastCustom";
import { ToastContainer } from "react-toastify";
import { formatarEmRealBrasileiro } from "../../data/utils/NumberFormat";
import { MESES_ANO, SITUACAO, TIPO_LANCAMENTO } from "./../../data/constants/index";
import LancamentoService from "../../infra/service/lancamentoService/LancamentoService";
import LocalStorageService from "../../infra/service/localStorageService";

class LancamentosConsulta extends React.Component {
  constructor(props) {
    super(props);

    this.LancamentoService = new LancamentoService();

    this.state = {
      listaLancamentos: [],
      listaMeses: MESES_ANO,
      tiposLancamento: TIPO_LANCAMENTO,
      listaStatus: SITUACAO,
      id: "",
      descricao: "",
      valor: "",
      tipo: "",
      data: "",
      situacao: "",
      mes: "",
      ano: "",
      show: false,
      deleteConfirme: false,
      selecaoDelete: undefined
    };
  }

  componentDidMount() {
    this.buscarLancamentos();
  }

  buscarLancamentos = () => {
    let { descricao, valor, tipo, situacao, mes, ano } = this.state;
    let usuarioLogado = LocalStorageService.obterItem("_usuario_logado");
    let usuario = usuarioLogado.id;
    let filtro = { descricao, valor, tipo, mes, ano, situacao, usuario };

    this.LancamentoService.buscar(filtro)
      .then((response) => {
        this.setState({ listaLancamentos: response.data });
      })
      .catch((error) => {
        showToastError(error.response.data.message);
      });
  };

  cadastrar = () => {};

  atualizar = (lancamento) => {
    console.log(lancamento);
    // this.LancamentoService.atualizar(id, lancamento)
    //   .then((response) => {
    //     this.setState({ listaLancamentos: response.data });
    //   })
    //   .catch((error) => {
    //     showToastError(error.response.data.message);
    //   });
  };

  visualizar = (lancamento) => {
    console.log(lancamento);
  };

  handleClose = () => {
    this.setState({ show: false, deleteConfirme: false });
  }

  handleShow = (lancamento) => {
    this.setState({ show: true, selecaoDelete: lancamento});
  }
  
  confirmeDeletar = () => {
    this.deletar(this.state.selecaoDelete);
  }

  deletar = (lancamento) => {

    this.LancamentoService.deletar(lancamento.id)
      .then((response) => {
        const listaLancamentos = this.state.listaLancamentos;
        let index = this.state.listaLancamentos.indexOf(lancamento);
        listaLancamentos.splice(index, 1);
        this.setState(listaLancamentos);

        showToastSuccess("Lançamento deletado com sucesso!");
      })
      .catch((error) => {
        showToastError(error.response.data.message);
      });
  };

  render() {
    let {
      shouldRedirect,
      navetageToRoute,
      listaMeses,
      tiposLancamento,
      listaStatus,
    } = this.state;

    return (
      <>
        <ToastContainer />
        {shouldRedirect === true ? (
          <Navigate replace to={navetageToRoute} />
        ) : (
          <div className="container">
            <Card value={"card mb-12"} title={"Lançamentos Consulta"}>
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Apagar Lançamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que deseja deletar registro?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>Cancelar</Button>
                  <Button variant="danger" onClick={this.confirmeDeletar}>Deletar</Button>
                </Modal.Footer>
              </Modal>
              <FormGroup htmlFor="ano">
                <Row>
                  <Col>
                    <label htmlFor="descricao">Descrição:</label>
                    <Form.Control
                      style={{ paddingTop: "16px" }}
                      type="text"
                      className="form-control"
                      id="descricao"
                      name="descricao"
                      aria-describedby="text"
                      placeholder="Descrição"
                      value={this.state.descricao}
                      onChange={(event) =>
                        this.setState({ descricao: event.target.value })
                      }
                    />
                  </Col>
                  <Col>
                    <label htmlFor="valor">Valor R$:</label>
                    <Form.Control
                      style={{ paddingTop: "16px" }}
                      type="text"
                      className="form-control"
                      id="valor"
                      name="valor"
                      aria-describedby="text"
                      placeholder="R$100,00"
                      value={this.state.valor}
                      onChange={(event) =>
                        this.setState({ valor: event.target.value })
                      }
                    />
                  </Col>
                  <Col>
                    <label htmlFor="tipo">Tipo:</label>
                    <SelectList
                      lista={tiposLancamento}
                      value={this.state.tipo}
                      onChange={(event) =>
                        this.setState({ tipo: event.target.value })
                      }
                    />
                  </Col>
                  <Col>
                    <label htmlFor="mes">Mês:</label>
                    <SelectList
                      lista={listaMeses}
                      value={this.state.mes}
                      onChange={(event) =>
                        this.setState({ mes: event.target.value })
                      }
                    />
                  </Col>
                  <Col>
                    <label htmlFor="situacao">Situação:</label>
                    <SelectList
                      lista={listaStatus}
                      value={this.state.situacao}
                      onChange={(event) =>
                        this.setState({ situacao: event.target.value })
                      }
                    />
                  </Col>
                  <Col style={{ marginTop: "20px" }}>
                    <Stack direction="horizontal" gap={2}>
                      <button
                        id="buscar"
                        name="buscar"
                        className="btn btn-success"
                        onClick={(event) => this.buscar(event)}
                      >
                        Buscar
                      </button>
                      <button
                        id="cadastrar"
                        name="cadastrar"
                        className="btn btn-danger"
                        onClick={(event) => this.cadastrar(event)}
                      >
                        Cadastrar
                      </button>
                    </Stack>
                  </Col>
                </Row>
              </FormGroup>
              <Card value={"card mb-12"}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Descrição</th>
                      <th>Valor R$</th>
                      <th>Tipo</th>
                      <th>Data Criação</th>
                      <th>Data Atualização</th>
                      <th>Situação</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.listaLancamentos.map((lancamento) => (
                      <tr key={lancamento.id}>
                        <td>{lancamento.id}</td>
                        <td>{lancamento.descricao}</td>
                        <td>{formatarEmRealBrasileiro(lancamento.valor)}</td>
                        <td>{lancamento.tipo}</td>
                        <td>{lancamento.dataCriacaoFormatada}</td>
                        <td>{lancamento.dataCriacaoFormatada}</td>
                        <td>{lancamento.status}</td>
                        {/* Criar botoes para acoes -visualizar, editar, excluir*/}
                        <td style={{ width: "300px" }}>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            style={{ marginRight: "15px" }}
                            onClick={(event) => this.visualizar(lancamento)}
                          >
                            Visualizar
                          </button>

                          <button
                            type="button"
                            className="btn btn-warning btn-sm"
                            style={{ marginRight: "15px" }}
                            onClick={(event) =>
                              this.atualizar(lancamento)
                            }
                          >
                            Editar
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={(event) => this.handleShow(lancamento)}
                          >
                            Deletar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Card>
          </div>
        )}
      </>
    );
  }
}

export default LancamentosConsulta;
