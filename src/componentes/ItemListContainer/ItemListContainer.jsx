import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = collection(db, "products");
                let productsQuery;

                if (categoryId) {
                    productsQuery = query(productsCollection, where("category", "==", categoryId));
                } else {
                    productsQuery = productsCollection;
                }

                const querySnapshot = await getDocs(productsQuery);
                const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                setProducts(productsList);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div className='ItemListContainer'>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
