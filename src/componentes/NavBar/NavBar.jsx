import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.jsx';
import './NavBar.css';
import { getUniqueCategories } from "../../data/data.js";

const NavBar = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getUniqueCategories()
            .then(categoriasUnicas => setCategorias(categoriasUnicas))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <p>ZapaShop</p>
            </div>
            <ul className="navbar-links">
                <NavLink to="/">Inicio</NavLink>
                {categorias.map((categoria, index) => (
                    <NavLink key={index} to={`/category/${categoria}`}>
                        {categoria}
                    </NavLink>
                ))}
            </ul>
            <div className="navbar-cart">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;