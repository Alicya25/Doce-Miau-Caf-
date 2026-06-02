import "./Pedidos.css";

export function Pedidos({ carrinho, removeCarrinho }) {

  const total = carrinho.reduce((acc, item) => {
    // O .trim() remove espaços em branco que podem quebrar o código ou o layout
    const valorTexto = item.category ? item.category.replace("R$", "").replace(",", ".").trim() : "0";
    const valor = Number(valorTexto) || 0;
    return acc + valor;
  }, 0);

  return (
    <div className="pedido-principal">
      <h1 className="pedido-titulo">
        Acompanhe seu pedido:
      </h1>

      <div className="pedido-area">
        <div className="pedido-lista-cards">
          {carrinho.map((item) => (
            <div className="pedido-card" key={item.id}>
              <img
                src={item.imagem}
                alt={item.title}
                className="pedido-img"
              />

              <div className="pedido-info">
                <h2>{item.title}</h2>
                <p className="pedido-preco">{item.category}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeCarrinho(item.id)}
              >
                -
              </button>
            </div>
          ))}
        </div>

        <h2 className="pedido-total">
          TOTAL: R$ {total.toFixed(2)}
        </h2>
      </div>
    </div>
  );
}