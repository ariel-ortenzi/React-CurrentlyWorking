import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts"
import { useParams } from "react-router-dom"
import Loading from "../loading/Loading";

function ItemListContainer({ titles }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { idCategory } = useParams();
    const { idInput } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts
            .then((response) => {
                if (idCategory) {
                    const newProducts = response.filter((product) =>
                        typeof product.category === 'string' &&
                        typeof idCategory === 'string' &&
                        product.category.toLowerCase() === idCategory.toLowerCase())
                    setProducts(newProducts);
                }
                else if (idInput) {
                    const newProducts = response.filter((product) =>
                        product.name.toLowerCase().includes(idInput.toLowerCase()))
                    setProducts(newProducts);
                }
                else {
                    setProducts(response);
                }
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, [idCategory, idInput])

    return (
        <div>
            <h2 className="font-quickSand text-center m-5 text-2xl underline text-azulOrpack font-bold">{typeof idCategory === 'string' && idCategory.toUpperCase()}</h2>
            <h2 className="font-quickSand text-center m-5 text-2xl underline text-azulOrpack font-bold">{titles}</h2>
            {loading ? <Loading/> : <ItemList products={products} searchInput={idInput} />}
        </div>
    )

}

export default ItemListContainer