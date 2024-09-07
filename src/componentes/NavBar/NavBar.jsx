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
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" style={({ isActive }) => ({
                    color: isActive ? '#ffcc00' : 'initial' // Cambia el color si está activo
                })} >CeluShop</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {categorias.map((categoria, index) => (
                            <li className="nav-item" key={index} >
                                <NavLink className="nav-link" to={`/category/${categoria}`}>
                                    {categoria}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
