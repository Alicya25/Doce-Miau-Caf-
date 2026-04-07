import './App.css';
import { useState } from "react";
import { Header } from "./components/Header";
import {Home} from "./components/Home";
import {gData} from "./components/data/Gatos"
// import {Card} from "./components/Card"
function App() {
   const [activeTab, setActiveTab]=useState('Home')

  return (
    <div className="cafe-principal">
       <div className="cafe-main">
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>


    <div className="banner-principal">
    <Home/>
    </div>


    <div className="cafe-content">
      {/* <h2>Conheça os nossos gatos</h2> */}
          {/* <div className="cafe-grid">
            {
              gData.map((g)=> (<Card
                key={g.id}
                title = {g.title}
                category={g.category}
                imagem={g.imagem}
              />))
            }
          </div> */}
        </div>
    </div>
  )
}
export default App;