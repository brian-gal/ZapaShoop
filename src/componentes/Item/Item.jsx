import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, image, price, count }) => {
    return (
        <article className="product-container">
            <section>
                <h2 className="ItemHeader" >
                    {title}
                </h2>
            </section>
            <picture>
                <img src={image} alt={title} />
            </picture>
            <section>
                <p className="price">Precio: {price}</p>
                <p className="stock">Stock: {count}</p>
            </section>
            <section>
                <Link to={`/item/${id}`} className="details-button">Ver detalles</Link>
            </section>
        </article>
    )
}

export default Item