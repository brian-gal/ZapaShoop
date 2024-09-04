import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productDoc = doc(db, "products", itemId);
                const productSnapshot = await getDoc(productDoc);

                if (productSnapshot.exists()) {
                    setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
                } else {
                    console.error("No product found with the given ID");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;
