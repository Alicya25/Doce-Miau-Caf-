import './App.css';
import { useState } from "react";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Gato } from "./components/Gato";
import { Menu } from "./components/Menu";
import { Pedidos } from "./components/Pedidos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [activeTab, setActiveTab] = useState("home");

  const [carrinho, setCarrinho] = useState([]);

  // ADICIONAR / REMOVER
  const toggleCarrinho = (produto) => {

    const produtoNome = produto ? produto.name : "Produto";
    const existe = carrinho.some((item) => item.id === produto.id);

    if (existe) {
      toast.info(
        `${produtoNome} removido do carrinho`,
        { theme: "dark" }
      );
    } else {
      toast.success(
        `${produtoNome} adicionado ao carrinho`,
        { theme: "dark" }
      );
    }

    setCarrinho((prev) => {

      const existe = prev.find(
        (item) => item.id === produto.id
      );

      if (existe) {

        return prev.filter(
          (item) => item.id !== produto.id
        );

      }

      return [...prev, produto];

    });

    setActiveTab("pedidos");
  };

  // REMOVER PELO BOTÃO "-"
  const removeCarrinho = (id) => {

    setCarrinho((prev) =>
      prev.filter((item) => item.id !== id)
    );

  };

  function renderContent() {

    if (activeTab === "home") {
      return <Home />;
    }

    if (activeTab === "menu") {

      return (
        <Menu
          carrinho={carrinho}
          toggleCarrinho={toggleCarrinho}
        />
      );
    }

    if (activeTab === "gatos") {
      return <Gato />;
    }

    if (activeTab === "pedidos") {

      return (
        <Pedidos
          carrinho={carrinho}
          removeCarrinho={removeCarrinho}
        />
      );
    }
  }

  return (

    <div className="cafe-principal">

      <div className="cafe-main">

        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

      </div>

      <div className="banner-principal">
        {renderContent()}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;