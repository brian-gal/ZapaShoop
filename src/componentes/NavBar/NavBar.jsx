import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.jsx';
import './NavBar.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js";

const NavBar = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const productsCollection = collection(db, "products");
                const productsSnapshot = await getDocs(productsCollection);
                const categoriesSet = new Set();

                productsSnapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.category) {
                        categoriesSet.add(data.category);
                    }
                });

                setCategorias(Array.from(categoriesSet));
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand"><p>CeluShop</p></NavLink>
            <ul className="navbar-links">
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
