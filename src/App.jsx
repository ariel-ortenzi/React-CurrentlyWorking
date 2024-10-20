import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import CartList from "./components/Cart/CartList.jsx";
import NotFound404 from "./components/NotFound404/NotFound404.jsx";
import { CartProvider } from "./components/Context/CartContext.jsx";


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
