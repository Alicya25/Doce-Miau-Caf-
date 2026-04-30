import "./CardMenu.css";

export function CardMenu({ title, category, imagem }) {
  return (
    <div className="cafe-menu-principal">
      <img className="cafe-Menu-img" src={imagem} alt={title} />
      <div className="Menu-info">
        <div className="comidas">
          <h3>{title}</h3>
        </div>
        <p>{category}</p>
      </div>
    </div>
  );
}