import "./Modal.css";
import { useState } from "react";

export function Modal({ produto, adicionarCarrinho, fechar }) {
  const [quantidade, setQuantidade] = useState(1);
  const preco = Number(
    produto.category
      .replace("R$", "")
      .replace(",", ".")
      .trim()
  );

  const total = (preco * quantidade).toFixed(2).replace(".", ",");

  function confirmarPedido() {
    adicionarCarrinho(produto, quantidade);
    fechar();
  }

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function aumentar() {
    setQuantidade(quantidade + 1);
  }

  return (
    <div className="modal-fundo">
      <div className="modal">
        <img
          className="modal-img"
          src={produto.imagem}
          alt={produto.title}
        />

        <h2>{produto.title}</h2>

        <div className="controle-quantidade">
          <button onClick={diminuir}>-</button>
          <span>{quantidade}</span>
          <button onClick={aumentar}>+</button>
        </div>

        {/* COLOCAMOS A DIV LIVRE ENVOLVENDO O PREÇO */}
        <div className="modal-preco-livre">
          <p className="modal-preco">R$ {total}</p>
        </div>

        <button className="btn-adicionar" onClick={confirmarPedido}>
          Adicionar ao pedido
        </button>

        <button className="btn-cancelar" onClick={fechar}>
          Cancelar
        </button>
      </div>
    </div>
  );
}