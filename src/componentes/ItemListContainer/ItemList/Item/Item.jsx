import './Item.css';

const Item = ({ id, title, image, price, rating }) => {
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
                <p className="stock">Stock: {rating.count}</p>
            </section>
            <section>
                <button className="details-button">Ver detalles</button>
            </section>
        </article>
    )
}

export default Item