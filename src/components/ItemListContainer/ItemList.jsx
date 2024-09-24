import Item from "./Item.jsx"

const ItemList = ({ products }) =>{
    return(
        <div className="flex flex-wrap justify-center gap-4 p-2 ">
            {products.map((product) => {
                return <Item key={product.id} product={product} />
            })}
        </div>
    )
}

export default ItemList