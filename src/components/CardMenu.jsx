import "./CardMenu.css";
import { Plus } from "lucide-react";

export function CardMenu({
  title,
  category,
  imagem,
  onCarrinho
}) {

  return (
    <div className="cafe-menu-principal">

      <img
        className="cafe-Menu-img"
        src={imagem}
        alt={title}
      />

      <p className="preco">
        {category}
      </p>

      <div className="Menu-info">

        <div className="comidas">

          <h3>{title}</h3>

          <button
            className="favorite-btn"
            onClick={onCarrinho}
          >
            <Plus
              size={18}
              stroke="white"
            />
          </button>

        </div>

      </div>

    </div>
  );
}