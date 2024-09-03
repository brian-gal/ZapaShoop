import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

const CartItem = ({ id }) => {
    const { cart, removeItem, updateItemQuantity } = useContext(CartContext);
    const item = cart.find(prod => prod.id === id); // Busca el item específico por su id

    if (!item) return null; // Si no encuentra el item, no renderiza nada

    const increment = () => {
        if (item.count > item.quantity) {
            updateItemQuantity(item.id, item.quantity + 1);
        }
    };

    const decrement = () => {
        if (item.quantity > 1) {
            updateItemQuantity(item.id, item.quantity - 1);
        }
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">Precio c/u: ${item.price}</p>
                <p className="cart-item-subtotal">Subtotal: ${item.price * item.quantity}</p>
            </div>

            <div className='cart-item-prod'>
                <div className="cart-item-quantity-controls">
                    <button onClick={decrement} className="quantity-button">-</button>
                    <p className="cart-item-quantity">{item.quantity}</p>
                    <button onClick={increment} className="quantity-button">+</button>
                </div>
                <button
                    onClick={() => removeItem(item.id)}
                    className="cart-item-remove-button"
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>



        </div>
    );
};

export default CartItem;
