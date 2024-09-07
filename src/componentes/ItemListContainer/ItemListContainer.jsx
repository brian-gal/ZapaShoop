import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList.jsx";
import Cover from "../cover/cover.jsx";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga
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
                setLoading(false); // Cambiar a false cuando los productos se han cargado
            } catch (error) {
                console.error("Error fetching products: ", error);
                setLoading(false); // También cambiar a false en caso de error
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div className='ItemListContainer'>
            <Cover />
            {loading ? (
                <p className='cargando'>Cargando...</p> // Mostrar mensaje de "Cargando" mientras `loading` es true
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
