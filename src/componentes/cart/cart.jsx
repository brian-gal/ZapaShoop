import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import CartItem from "../CartItem/CartItem";
import './cart.css';



const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    let total = cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0);

    return (
        <div className="contenedor-carrito">
            <div className="listaCompra">
                {cart.map(p => <CartItem key={p.id} {...p} />)}
                <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            </div>
            <div className="resumenCompra">
                <h3>Resumen de Compra</h3>
                <p>Total a pagar: ${total}</p>
                <Link to='/checkout' className="Comprar">Continuar Comprar</Link>
            </div>
        </div>
    )
}


export default Cart;