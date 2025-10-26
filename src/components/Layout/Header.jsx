import "../../css/Header.css";
import "../../css/General.css";
import logo from "../../images/other/logo.png";
import {Link} from "react-router-dom";

const Header = () => {
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
                <ul className="columns">
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