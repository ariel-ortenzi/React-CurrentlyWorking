import { FaCartArrowDown } from "react-icons/fa6";

function CartWidget() {
    return (
    <div className="relative p-2.5">
        <FaCartArrowDown size="50px"/>
        <span className="absolute top-0 right-0 bg-azulOrpack text-[12px] text-white font-bebas py-1 px-2.5 rounded-full border border-white">7</span>
    </div>
    )
}

export default CartWidget