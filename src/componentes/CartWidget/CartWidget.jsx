import './CartWidget.css';
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <NavLink to='/cart' className='cart-widget' style={({ isActive }) => ({
            color: isActive ? '#ffcc00' : 'initial' // Cambia el color si está activo
        })}>
            <i className="bi bi-cart3"></i>
            {totalQuantity}
        </NavLink>
    )
}

export default CartWidget;