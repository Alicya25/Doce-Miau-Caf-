import './App.css';
import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Gato } from "./components/Gato";
import { Menu } from "./components/Menu";
import { Pedidos } from "./components/Pedidos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {

  const [activeTab, setActiveTab] = useState("home");
  const [carrinho, setCarrinho] = useState([]);

  // ADICIONAR PRODUTO COM QUANTIDADE
  const adicionarCarrinho = (produto, quantidade) => {

    toast.success(
      `${produto.title} adicionado ao carrinho`,
      { theme: "light" }
    );

    setCarrinho((prev) => {

      const existe = prev.find(
        (item) => item.id === produto.id
      );

      // Se já existe, soma a quantidade
      if (existe) {
        return prev.map((item) =>
          item.id === produto.id
            ? {
                ...item,
                quantidade: item.quantidade + quantidade
              }
            : item
        );
      }

      // Se é um produto novo, adiciona
      return [
        ...prev,
        {
          ...produto,
          quantidade
        }
      ];

    });

  };

  // REMOVER PRODUTO DO PEDIDO
  const removeCarrinho = (id) => {

    setCarrinho((prev) =>
      prev.filter((item) => item.id !== id)
    );

  };

  // LIMPAR CARRINHO APÓS ENVIAR PEDIDO
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  function renderContent() {

    if (activeTab === "home") {
      return (
        <Home
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      );
    }

    if (activeTab === "menu") {
      return (
        <Menu
          adicionarCarrinho={adicionarCarrinho}
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
          limparCarrinho={limparCarrinho}
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

      <Footer />

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