import CartWidget from './CartWidget/CartWidget.jsx';
import './NavBar.css';

const NavBar = () => {


    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="#home">ZapaShop</a>
            </div>
            <ul className="navbar-links">

            </ul>
            <div className="navbar-cart">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;