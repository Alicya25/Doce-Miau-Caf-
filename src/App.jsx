import './App.css';
import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Gato } from "./components/Gato";
import { Menu } from "./components/Menu"

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [Carrinho, setCarrinho]=useState([]);

  const toggleCarrinho = (id)=>{ //atualiza o state de acordo com o valor
    setFavorites((prev)=> prev.includes(id) ? prev.filter((favId) => favId !== id ) : [...prev, id]); //prev é o valor anterior, ele vai pegar o valor anterior + o atual
  } 

  function renderContent() {
    if (activeTab === "home") {
      return <Home />;
    }
     if (activeTab === "menu") {
      return <Menu />;
    }

    if (activeTab === "gatos") {
      return <Gato />;
    }
    if (activeTab === "pedidos") {
      return <h2>Em construção</h2>;
    }
  }

  return (
    <div className="cafe-principal">
      <div className="cafe-main">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="banner-principal">
        {renderContent()}
      </div>

      <div className="cafe-content">
      </div>
    </div>
  );
}

export default App;