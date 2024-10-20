import { useState, useEffect } from "react";
// import getProducts from "../../data/getProducts";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import GetProducts from "../../data/GetProducts";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { idProduct } = useParams()

    useEffect(() => {
        setLoading(true)
        GetProducts()
            .then((response) => {
                const newProduct = response.find((product) => product.id === Number(idProduct))
                setProduct(newProduct)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [idProduct])

    return (
        <>
            {loading ? <Loading/> : <ItemDetail product={product} />}
        </>
    )
}

export default ItemDetailContainer