import "./Cards.css";

export function Card({title, category, imagem}){
     return(
          <div className="cafe-card">
               <img className="cafe-gatos" src={imagem} alt={title}  />
               <div className="card-info">
                    <div className="nome-pet">
                         <h3>{title}</h3>
                    </div>
                    <p>{category}</p>
                    <button className="play-btn">Conhecer</button>
               </div>
          </div>
     )
}