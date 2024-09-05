import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logotype/logoOrpack.png";
import { FcSearch } from "react-icons/fc";

function NavBar() {
    return (
        <header className="sticky top-0 bg-gray-500 border border-b-4 border-gray-500 border-b-blue-900">
            <nav className="flex flex-grow-1 p-4">
                <div className="content-center">
                    <img className="size-40" src={logo} alt="Logo orpack" />
                </div>
                <div className="flex grow justify-center items-center">
                    <input className="w-[60%] h-12 text-center rounded-lg border-2 font-quickSand text-lg font-semibold" type="text" placeholder="¿Qué estas buscando?" />
                    <button><FcSearch className="m-2" size="50px"/></button>
                    
                </div>
                <div className="flex items-center justify-around">
                    <ul className="flex justify-around items-center space-x-10 font-bebas text-2xl">
                        <li>
                            <a className="hover:text-azulOrpack" href="#">Inicio</a>
                        </li>
                        <li>
                            <a className="hover:text-azulOrpack" href="#">Productos</a>
                        </li>
                        <li>
                            <a className="hover:text-azulOrpack pr-6" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center mr-4">
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
