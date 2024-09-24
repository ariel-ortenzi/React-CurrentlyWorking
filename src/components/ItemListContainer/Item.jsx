import { Link } from "react-router-dom";

const Item = ({ product }) =>{

    return(
        <div key={product.id} className="max-w-sm max-h-full bg-white rounded-lg shadow-md overflow-hidden flex p-4 justify-center items-center min-w-sm min-h-full">
            <div className="p-4 text-center items-center">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <div>
                    <img className="w-full h-48 object-cover pt-2" src= {`/productsImages/${product.routeImage}`} alt={product.name} />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-lg text-gray-500 mt-2">{`$ ${product.price} u.`}</h3>
                    <Link className="p-4 font-medium" to={`/detail/${product.id}`}>Ver detalles</Link>
                    <button className="bg-[#144681] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0d3460] hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out">COMPRAR</button>
                </div>
            </div>

        </div>
    )
}

export default Item;