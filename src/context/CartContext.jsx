import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => { },
    removeItem: () => { },
    clearCart: () => { },
    updateItemQuantity: () => { } // Agrega esta función
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('El producto ya fue agregado');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const updateItemQuantity = (itemId, quantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            )
        );
    };

    // Calcula la cantidad total de productos en el carrito
    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, updateItemQuantity, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
