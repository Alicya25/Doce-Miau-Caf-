import "./Cards.css";

export function Card({title, category, imagem}){
     return(
          <div className="cafe-card">
               <img className="cafe-gatos" src={imagem} alt={title}  />
               <div className="card-info">
                    <h4>{title}</h4>
                    <p>{category}</p>
                    <button className="play-btn"></button>
               </div>
          </div>
     )
}