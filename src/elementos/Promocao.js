import Cabecalho from '../componentes/Cabecalho'
import Navegacao from '../componentes/Navegacao'
import Rodape from '../componentes/Rodape'
import ControlledCarousel from '../componentes/Carousel'

export default function Promocao() {
    return (
        <div>
            <Cabecalho/>
            <Navegacao/>
            <main className="banner">
                <ControlledCarousel/>
            </main>
            <Rodape />
        </div >
    )
}