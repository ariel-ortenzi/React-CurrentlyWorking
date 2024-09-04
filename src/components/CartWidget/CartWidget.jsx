import { FaCartArrowDown } from "react-icons/fa6";

function CartWidget() {
    return (
    <div className="relative p-2.5">
        <FaCartArrowDown size="40px"/>
        <span className="absolute top-0 right-0 bg-azulOrpack text-[12px] text-white font-bebas py-0.5 px-2.5 rounded-full">7</span>
    </div>
    )
}

export default CartWidget