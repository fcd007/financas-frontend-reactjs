import ApiService from "../Apiservice";

const LANCAMENTOS = "/api/v1/lancamentos";

class LancamentoService extends ApiService {
  constructor() {
    super(LANCAMENTOS);
  }

  buscar(filtro) {
    let params;

    if(filtro.descricao) {
      params = `${params}&descricao=${filtro.descricao}`;
    }

    if(filtro.valor) {
      params = `${params}&valor=${filtro.valor}`;
    }

    if(filtro.tipo) {
      params = `${params}&tipo=${filtro.tipo}`;
    }

    if(filtro.mes) {
      params = `${params}&mes=${filtro.mes}`;
    }

    if(filtro.ano) {
      params = `${params}&mes=${filtro.ano}`;
    }

    if(filtro.situacao) {
      params = `${params}&situacao=${filtro.situacao}`;
    }

    if(filtro.usuario) {
      params = `${params}&usuario=${filtro.usuario}`;
    }

    return this.get(`/buscar?${params}`);
  }

  buscarLcanamentoId(id) {
    return this.get(`/lancamento/${id}`);
  }

  salvar(lancamento) {
    return this.post("/save", lancamento);
  }

  atualizar(id, lancamento) {
    return this.put(`/update/${id}`, lancamento);
  }

  atualizarStatus(id, descricao) {
    return this.put(`/updateStatus/${id}`, descricao);
  }

  delete(id) {
    return this.delete(`/delete/${id}`);
  }
}

export default LancamentoService;
