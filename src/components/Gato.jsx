import "./Gato.css";
import { useState } from "react";
import { gData } from "./data/Gatos";
import { Card } from "./Card";
import { GameModal } from "./GameModal";

import detalhe1 from "../assets/detalhes-logo/8.png";
import detalhe2 from "../assets/detalhes-logo/7.png";

export function Gato() {

     const [selectedGato, setSelectedGato] = useState(null);

     return (
          <div className="principal">

               <div className="titulo">
                    <img id="pata" src={detalhe1} alt="café" /> 
                    <h2 id="titulo-gatos">Conheça os nossos gatos</h2>
                    <img id="pata" src={detalhe2} alt="café" /> 
               </div>

               <div className="cafe-grid">
                    {gData.map((g) => (
                         <Card
                              key={g.id}
                              title={g.title}
                              category={g.category}
                              imagem={g.imagem}
                              onPlay={() => setSelectedGato(g)}
                         />
                    ))}
               </div>

               <GameModal
                    game={selectedGato}
                    onClose={() => setSelectedGato(null)}
               />

          </div>
     );
}