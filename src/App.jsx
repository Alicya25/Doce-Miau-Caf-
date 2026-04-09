import './App.css';
import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Gato } from "./components/Gato";

function App() {
  const [activeTab, setActiveTab] = useState('home');

  function renderContent() {
    if (activeTab === "home") {
      return <Home />;
    }
     if (activeTab === "menu") {
      return <h2>Em construção</h2>;
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