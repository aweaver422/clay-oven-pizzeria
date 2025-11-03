import {useState} from "react";
import {Link} from "react-router-dom";
import "../../css/Header.css";
import "../../css/General.css";
import logo from "../../images/other/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    
    return (
        <header id="main-header">
            <div id="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <h1 id="header-title">
                <Link to="/">Clay Oven Pizzeria</Link>
            </h1>
            <nav id="main-nav">
                <p onClick={toggleMenu} id="toggle-nav">&#9776;</p>
                <ul className={menuOpen ? "columns" : "hide-small"}>
                    <li><Link to="/menu">MENU</Link></li>
                    <li><Link to="/specials">SPECIALS</Link></li>
                    <li><Link to="/order">ORDER</Link></li>
                    <li><Link to="/contact-us">CONTACT US</Link></li>
                    <li><Link to="/careers">CAREERS</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;