import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ id, title, image, price, count, description, category }) => {
    return (
        <article className="cardItemDetail">
            <section>
                <h2 className="ItemHeader" >
                    {title}
                </h2>
            </section>
            <picture>
                <img src={image} alt={title} />
            </picture>
            <section className="info-section">
                <p className="category">Stock: {category}</p>
                <p className="info">Descripcion: {description}</p>
                <p className="price">Precio: {price}</p>
            </section>
            <section>
                <ItemCount inicial={1} stock={count} onAdd={(quantity) => console.log("Cantidad agregada:", quantity)} />
            </section>
        </article>
    )
}

export default ItemDetail