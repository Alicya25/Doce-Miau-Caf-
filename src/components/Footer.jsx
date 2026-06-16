import "./Footer.css";

function Footer({setActiveTab}) {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column">
          <h3>Alunos</h3>
          <p>Alicya Ressatti Rocha</p>
          <p>Gabriela Pedroso Ribeiro</p>
        </div>

        <div className="footer-column">
          <h3>E-mail</h3>
          <p>alicya@email.com</p>
          <p>gabriela@email.com</p>
        </div>

        <div className="footer-column">
          <h3>Telefone</h3>
          <p>(15) 998888-8888</p>
          <p>(15) 996666-6666</p>
        </div>

        <div className="footer-column">
          <h3>Instagram</h3>
          <p>@docemiaucafe</p>
        </div>

        <div className="footer-column">
          <h3>Professores</h3>
          <p>Ricardo Caironi</p>
        </div>

    {/* <div className="footer-column">
      <h3>Navegação</h3>

      <p onClick={() => setActiveTab("home")}>Home</p>
      <p onClick={() => setActiveTab("menu")}>Menu</p>
      <p onClick={() => setActiveTab("gatos")}>Gatos</p>
      <p onClick={() => setActiveTab("pedidos")}>Pedidos</p>
    </div> */}

      </div>
    </footer>
  );
}

export default Footer;