import "./Pedidos.css";
import { useState, useEffect } from "react";
import detalhe1 from "../assets/detalhes-logo/8.png";
import detalhe2 from "../assets/detalhes-logo/7.png";

export function Pedidos({
  carrinho,
  removeCarrinho,
  limparCarrinho
}) {

  const [pedidoEnviado, setPedidoEnviado] = useState(false);

  useEffect(() => {
    if (carrinho.length > 0) {
      setPedidoEnviado(false);
    }
  }, [carrinho]);

  const total = carrinho.reduce((acc, item) => {

    const valorTexto = item.category
      ? item.category.replace("R$", "").replace(",", ".").trim()
      : "0";

    const valor = Number(valorTexto) || 0;

    return acc + (valor * item.quantidade);

  }, 0);

  return (

    <div className="pedido-principal">

      <img id="pata1" src={detalhe1} alt="café" />
      <h1 className="pedido-titulo">Acompanhe seu pedido:</h1>
      <img id="pata2" src={detalhe2} alt="café" />

      <div className="pedido-area">

        <div className="pedido-lista-cards">

          {!pedidoEnviado && carrinho.map((item) => {

            const valor = Number(
              item.category
                .replace("R$", "")
                .replace(",", ".")
                .trim()
            );

            const subtotal = valor * item.quantidade;

            return (

              <div className="pedido-card" key={item.id}>

                <img
                  src={item.imagem}
                  alt={item.title}
                  className="pedido-img"
                />

                <div className="pedido-info">

                  <h2>{item.title}</h2>

                  <div className="pedido-valores-livres">

                    <p className="pedido-quantidade">
                      Quantidade: {item.quantidade}
                    </p>

                    <p className="pedido-preco">
                      R$ {valor.toFixed(2).replace(".", ",")} x {item.quantidade}
                    </p>

                    <p className="pedido-subtotal">
                      Subtotal: R$ {subtotal.toFixed(2).replace(".", ",")}
                    </p>

                  </div>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeCarrinho(item.id)}
                >
                  -
                </button>

              </div>

            );

          })}

        </div>

        {!pedidoEnviado && (
          <h2 className="pedido-total">
            TOTAL: R$ {total.toFixed(2).replace(".", ",")}
          </h2>
        )}

        <button
          className={`botao-Pedido ${pedidoEnviado ? "enviado" : ""}`}
          onClick={() => {
            setPedidoEnviado(true);
            limparCarrinho();
          }}
          disabled={pedidoEnviado}
        >
          {pedidoEnviado
            ? "Pedido enviado!"
            : "Mandar para a cozinha"}
        </button>

      </div>

    </div>

  );

}