import "./Header.css";
// import Logo from "../assets/logo.png";
export function Header({activeTab, setActiveTab}){
    return(
        <aside className="cafe-header">
             {/* <img className="logo-img" src={Logo} alt="café" /> */}
            <h2 className="logo">Doce Miau Café</h2>

            <nav>
                 <div className={`nav-item ${activeTab ==="home" ? 'active' :'' }`} onClick={()=>setActiveTab("home")}> Home</div>
                 <div className={`nav-item ${activeTab ==="menu" ? 'active' :'' }`} onClick={()=>setActiveTab("menu")}>  Menu</div>
                 <div className={`nav-item ${activeTab ==="gatos" ? 'active' :'' }`} onClick={()=>setActiveTab("gatos")}>Os gatos</div>
                 <div className={`nav-item ${activeTab ==="pedidos" ? 'active' :'' }`} onClick={()=>setActiveTab("pedidos")}>  Pedidos</div>

            </nav>

        </aside>
    )
}