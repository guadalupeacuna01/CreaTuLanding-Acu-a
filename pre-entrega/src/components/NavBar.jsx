import CartWidget from "./CartWidget";
import './NavBar.css'

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="nombreTienda">Mi Tienda</div>
                
                <ul  className="lista">
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                 </ul>
                 
                <CartWidget />
            </nav>
        </>
    )
}

export default NavBar;