import "./Header.css";
export function Header({activeTab, setActiveTab}){
    return(
        <aside className="cafe-header">
            <h2 className="logo">Doce Miau Café</h2>

            <nav>
                 <div className={`nav-item ${activeTab ==="Home" ? 'active' :'' }`} onClick={()=>setActiveTab("Home")}> Home</div>
                 <div className={`nav-item ${activeTab ==="Menu" ? 'active' :'' }`} onClick={()=>setActiveTab("Menu")}>  Menu</div>
                 <div className={`nav-item ${activeTab ==="Gatos" ? 'active' :'' }`} onClick={()=>setActiveTab("Gatos")}>Os gatos</div>
                 <div className={`nav-item ${activeTab ==="Pedidos" ? 'active' :'' }`} onClick={()=>setActiveTab("Pedidos")}>  Pedidos</div>

            </nav>

        </aside>
    )
}