import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, image, price, count }) => {
    return (
        <Link to={`/item/${id}`} className="details-button">
            <article className="product-container">
                <picture>
                    <img src={image} alt={title} />
                </picture>
                <h2 className="ItemHeader" >
                    {title}
                </h2>
                <div>
                    <p className="price">Precio: {price}</p>
                    <p className="stock">
                        {count === 0
                            ? 'Sin stock'
                            : count === 1
                                ? 'Último disponible'
                                : `Stock: ${count}`}
                    </p>
                </div>
            </article>
        </Link>
    )
}

export default Item