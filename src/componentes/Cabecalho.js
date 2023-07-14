import { Link } from "react-router-dom";
import logo from '../img/logo.jpg'

export default function Cabecalho() {
    return (
        <header>
            <Link to={`/`}>
                <img src={logo} alt="Nosso Sabor"/>
            </Link>
        </header>
    );
}