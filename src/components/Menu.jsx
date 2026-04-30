import "./Menu.css";
import { gMenu } from "./data/Menu.js";
import { CardMenu } from "./CardMenu";
import detalhe1 from "../assets/detalhes-logo/8.png";
import detalhe2 from "../assets/detalhes-logo/7.png";

export function Menu() {

  const doces = gMenu.filter(item => item.tipo === "doce");
  const salgados = gMenu.filter(item => item.tipo === "salgado");
  const bebidaQ = gMenu.filter(item => item.tipo === "bebidaQ");
  const bebidaG = gMenu.filter(item => item.tipo === "bebidaG");

  return (
    <div className="principal-menu">

      <div className="titulo-menu">
        <img id="pata" src={detalhe1} alt="café" />
        <h2 id="titulo-menu">Conheça o nosso Menu</h2>
        <img id="pata" src={detalhe2} alt="café" />
      </div>

      
      <h3 className="categoria-titulo">Pratos doces</h3>
      <div className="menu-row">
        {doces.map((g) => (
          <CardMenu key={g.id} {...g} />
        ))}
      </div>

      
      <h3 className="categoria-titulo">Salgados</h3>
      <div className="menu-row">
        {salgados.map((g) => (
          <CardMenu key={g.id} {...g} />
        ))}
      </div>

      {/* ☕ BEBIDAS */}
      <h3 className="categoria-titulo">Bebidas Quentes</h3>
      <div className="menu-row">
        {bebidaQ.map((g) => (
          <CardMenu key={g.id} {...g} />
        ))}
      </div>

      <h3 className="categoria-titulo">Bebidas Geladas</h3>
      <div className="menu-row">
        {bebidaG.map((g) => (
          <CardMenu key={g.id} {...g} />
        ))}
      </div>

    </div>
  );
}