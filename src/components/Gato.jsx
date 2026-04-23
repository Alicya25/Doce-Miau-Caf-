import "./Gato.css";
import { gData } from "./data/Gatos";
import { Card } from "./Card";
import detalhe1 from "../assets/8.png"
import detalhe2 from "../assets/7.png"

export function Gato() {
     return (
          <div className="principal">
               <div className="titulo">
                    <img className="pata-esquerda" src={detalhe1} alt="café" /> 
                    <h2>Conheça os nossos gatos</h2>
                    <img className="pata-direita" src={detalhe2} alt="café" /> 
               </div>
               <div className="cafe-grid">
                    {
                         gData.map((g) => (<Card
                              key={g.id}
                              title={g.title}
                              category={g.category}
                              imagem={g.imagem}
                         />))
                    }
               </div>
          </div>

     );
}