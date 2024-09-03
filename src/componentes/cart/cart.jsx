import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import CartItem from "../CartItem/CartItem";
import './cart.css';



const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext)

    let total = cart.reduce((total, prod) => total + (prod.price * prod.quantity), 0).toFixed(2);

    return (
        <div className="contenedor-carrito">
            <div className="listaCompra">
            {totalQuantity === 0 ? (
                <div className="carritoVacio">
                    <h1>¡Empezá un carrito de compras!</h1>
                    <Link to='/' className='linkProd'>Descubrir productos</Link>
                </div>
            ) : (
                <div className="item">
                    {cart.map(p => <CartItem key={p.id} {...p} />)}
                    <button className="itemButton" onClick={() => clearCart()}>Vaciar el Carrito</button>
                </div>
            )}

            </div>
            <div className="resumenCompra">
                <h3>Resumen de Compra</h3>
                {totalQuantity === 0 ? (
                <div>
                    <p className="textRes" >Aquí verás los importes de tu compra una vez que agregues productos.</p>
                </div>
            ) : (
                <div>
                             <p  className="textPag" >Total a pagar: ${total}</p>
                             <Link to='/checkout' className="Comprar">Continuar Comprar</Link>
                </div>
            )}

            </div>
        </div>
    )
}


export default Cart;