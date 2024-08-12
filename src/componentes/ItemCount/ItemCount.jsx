import { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ stock, inicial, onAdd }) => {
    const [quantity, setQuantity] = useState(inicial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAdd = () => {
        onAdd(quantity);
    };

    return (
        <div className="counter">
            <div className="controls">
                <button onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <button className="buttonCarrito" onClick={handleAdd}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;