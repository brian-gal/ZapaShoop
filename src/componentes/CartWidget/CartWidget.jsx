import './CartWidget.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className='cart-widget'>
            <i className="bi bi-cart3"></i>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;