const ItemDetail = ({ product }) => {
    return (
        <div className="relative flex justify-center items-center">
            <div className="absolute left-32 max-w-lg max-h-full pt-20 pr-30">
                <div className="w-full p-4 text-center items-center bg-white flex">
                    <div className="pr-6">
                        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                        <img className="min-w-full min-h-48 object-contain pt-2" src={`/productsImages/${product.routeImage}`} alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h4 className="text-lg text-justify mt-2 max-w-full">{product.description}</h4>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-white">
                    <h3 className="text-lg text-gray-500 mt-2 pb-6">{`$ ${product.price} u.`}</h3>
                    <button className="bg-[#144681] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0d3460] hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out mb-4">COMPRAR</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail