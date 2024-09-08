import "./NavBar.css";
import logo from "../../assets/helado.png"
import CartWidget from "../CartWidget/CartWidget";


function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <img className="logo" src={logo} alt="logo de la marca"/>
            </div>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="#">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Conocenos</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Cerca de ti</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar