import './App.css'
import NavBar from "./componentes/NavBar/NavBar.jsx";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./componentes/cart/cart.jsx"

import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>

  )
}


export default App
