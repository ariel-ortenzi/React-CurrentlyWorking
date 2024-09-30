
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../src/index.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer titles="NUESTROS PRODUCTOS"/>}/>
        <Route path="/category/:idCategory" element={<ItemListContainer />}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />}/>
        <Route path="/search=/:idInput" element={<ItemListContainer />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
