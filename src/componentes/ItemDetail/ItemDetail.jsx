import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, title, image, price, count, description, category }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { cart, addItem } = useContext(CartContext);

    // Verificar si el producto ya está en el carrito
    const isInCart = cart.some(prod => prod.id === id);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);  // Almacena la cantidad agregada en el estado local

        const item = {
            id,
            title,
            image,
            price,
            description,
            category,
            count
        };

        addItem(item, quantity);
    };

    return (
        <article className="cardItemDetail">
            <picture>
                <img src={image} alt={title} />
            </picture>
            <div>
                <section>
                    <h2 className="ItemHeader">
                        {title}
                    </h2>
                </section>
                <section className="info-section">
                    <p className="price">Precio: ${price}</p>
                    <p className="info">Descripción: {description}</p>
                    <p className="category">Stock: {count}</p>
                </section>
                <section>
                    {isInCart ? (
                        <div className="contenedor-cart">
                            <p>Producto ya fue agregado al carrito</p>
                            <Link to="/cart" className="go-to-cart-link">Ir al carrito</Link>
                        </div>
                    ) : (
                        <ItemCount inicial={1} stock={count} onAdd={handleOnAdd} />
                    )}
                </section>
            </div>
        </article>
    )
}

export default ItemDetail;
