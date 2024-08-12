import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsCategory } from "../../data/data.js";
import ItemList from "../ItemList/ItemList.jsx";

import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsCategory : getProducts

        asyncFunc(categoryId)
            .then((response) => setProducts(response))
            .catch((error) => console.error(error));
    }, [categoryId]);

    return (
        <div className='ItemListContainer'>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;