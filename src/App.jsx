
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import CartList from "./components/cart/CartList";
import NotFound404 from "./components/notFound404/NotFound404";
import { CartProvider } from "./components/context/CartContext";


function App() {

  return (

    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="*" element={<NotFound404 />}/>
        <Route path="/" element={<ItemListContainer titles="NUESTROS PRODUCTOS"/>}/>
        <Route path="/category/:idCategory" element={<ItemListContainer />}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />}/>
        <Route path="/search=/:idInput" element={<ItemListContainer />}/>
        <Route path="/cart" element={<CartList />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
