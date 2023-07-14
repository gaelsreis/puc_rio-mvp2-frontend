import logo from '../img/logo.jpg'
import Navegacao from '../componentes/Navegacao'
import Rodape from '../componentes/Rodape'

export default function Inicio() {
    return (
        <div className="intro">
            <Navegacao/>
            <div className='inicio'><img src={logo} alt="Nosso Sabor"/></div>
            <Rodape />
        </div >
    )
}