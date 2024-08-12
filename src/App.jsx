import './App.css'
import NavBar from "./componentes/NavBar/NavBar.jsx";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (


    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>

  )
}


export default App
