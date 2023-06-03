import ApiService from "../Apiservice";

const LANCAMENTOS = "/api/v1/lancamentos";

class LancamentoService extends ApiService {
  constructor() {
    super(LANCAMENTOS);
  }

  buscar(filtro) {
    return this.get(`/buscar`, filtro);
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
    return this.delete(`/updateStatus/${id}`);
  }
}

export default LancamentoService;
