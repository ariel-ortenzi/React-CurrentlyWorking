import { useState, useEffect } from "react";
import getProducts from "../../data/getProducts";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({});
    const {idProduct} = useParams()

    useEffect(() => {
        getProducts
        .then((response) => {
            const newProduct = response.find((product) => product.id === Number(idProduct))
            setProduct(newProduct)
        })
        .catch((error) => console.error(error))
    }, [idProduct])

    return(
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer