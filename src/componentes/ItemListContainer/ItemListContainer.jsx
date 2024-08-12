import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from "../data/data.js";
import ItemList from "./ItemList/ItemList.jsx";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className='ItemListContainer'>
            <h1>Bienvenidos</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;