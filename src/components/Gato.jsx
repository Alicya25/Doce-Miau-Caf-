import "./Gato.css";
import { gData } from "./data/Gatos"
import { Card } from "./Card"

export function Gato() {
     return (
          <div className="principal">
               <div className="titulo">
                    <h2>Conheça os nossos gatos</h2>
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