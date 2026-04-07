import fundo from "../assets/café.jpg";
import "./Home.css";

export function Home(){
  return(
    <div className="banner">
      <img className="fundo" src={fundo} alt="café" />
    </div>
  )
}