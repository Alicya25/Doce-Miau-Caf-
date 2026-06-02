import "./CardMenu.css";
import { Plus } from "lucide-react";

export function CardMenu({
  title,
  category,
  imagem,
  isCarrinho,
  onCarrinho
}) {

  return (

    <div className="cafe-menu-principal">

      <img
        className="cafe-Menu-img"
        src={imagem}
        alt={title}
      />

      <button
        className={`favorite-btn ${isCarrinho ? "active" : ""}`}
        onClick={onCarrinho}
      >

        <Plus
          size={18}
          stroke={isCarrinho ? "#7c3aed" : "white"}
        />

      </button>

      <div className="Menu-info">

        <div className="comidas">
          <h3>{title}</h3>
        </div>

        <p>{category}</p>

      </div>

    </div>
  );
}