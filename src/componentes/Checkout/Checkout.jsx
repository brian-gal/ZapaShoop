import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import CheckoutForm from "../CheckoutForm/CheckoutForm.jsx";

import { db } from "../../services/firebaseConfig.js";
import { Timestamp, writeBatch, addDoc, getDocs, collection, query, where, documentId } from "firebase/firestore";

const Checkout = () => {
    const [orderId, setOrderId] = useState("")

    const { cart, clearCart, totalQuantity } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: totalQuantity,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = await verifyStock(cart, batch);

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Hay productos que están fuera de stock');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const verifyStock = async (cart, batch) => {
        const outOfStock = [];
        const ids = cart.map(prod => prod.id);
        const productsRef = collection(db, 'products');
        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
        const { docs } = productsAddedFromFirestore;
    
        docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockDb = parseInt(dataDoc.count);  
            const productAddedToCart = cart.find(prod => prod.id === doc.id);
            const prodQuantity = productAddedToCart?.quantity;
    
            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { count: stockDb - prodQuantity });
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc });
            }
        });
    
        return outOfStock;
    };
    

    if (orderId) {
        return <h1>Gracias por su compra. El ID de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout;
