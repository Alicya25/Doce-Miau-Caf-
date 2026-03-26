import "./Header.css";
export function Header(){
    return(
        <aside className="cafe-header">
            <h2 className="logo">Doce Miau Café</h2>

            <nav>
                <div className="nav-item active">Home</div>
                <div className="nav-item"> Menu</div>
                <div className="nav-item"> Os gatos</div>
                <div className="nav-item"> Pedidos</div>

            </nav>

        </aside>
    )
}