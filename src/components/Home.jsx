import fundo from "../assets/detalhes-logo/cafe-fundo.png";
import Pata from "../assets/detalhes-logo/pata.png";
import "./Home.css";

export function Home() {
  return (
    <div className="banner">
      <div className="titulo-principal">
        <h3>Um café feito para quem ama gatos e momentos tranquilos 
          <img className="pata" src={Pata} alt="café" /> 
        </h3>
         <p className="subtitulo">
          Cafés especiais, doces artesanais e a companhia mais fofa que você vai encontrar. 
        </p>
        
        <button className="botao">Ver Menu</button>
      </div>

      <img className="fundo" src={fundo} alt="café" />
    </div>
  );
}