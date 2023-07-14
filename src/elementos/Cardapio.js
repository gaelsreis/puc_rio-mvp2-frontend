import {createContext, useEffect, useState} from "react"
import Item from "../componentes/Item"
import cardapio from '../cardapio.json'
import Cabecalho from '../componentes/Cabecalho'
import Navegacao from '../componentes/Navegacao'
import Rodape from '../componentes/Rodape'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {useLocation} from 'react-router-dom';

export const Contexto = createContext()

export default function Cardapio() {
  const [productList, setProductList] = useState([])
  const [count, setCount] = useState(0)
  
  let location = useLocation()
  var local = location.pathname.split("/")
  var tipo
  if (local[1] === 'entrada' || local[2] === 'entrada') {tipo = cardapio.entrada}
  else if (local[1] === 'refeicao' || local[2] === 'refeicao') {tipo = cardapio.refeicao}
  else if (local[1] === 'lanche' || local[2] === 'lanche') {tipo = cardapio.lanche}
  else if (local[1] === 'sobremesa' || local[2] === 'sobremesa') {tipo = cardapio.sobremesa}
  else if (local[1] === 'bebida' || local[2] === 'bebida') {tipo = cardapio.bebida}
  
  console.log("local:", local[2])
  console.log("tipo:", tipo)

  useEffect(() => {setProductList(tipo)}, [tipo])

  return (
    <div>
      <Cabecalho/>
      <div><Navegacao/><BorderColorIcon/> Pedido: R$ {Math.round((count * 100) / 100)}</div>

      <main className="menu">
        <Contexto.Provider value={setCount}>
          {productList.map((p, index) => (<Item key={index} product={p} />))}
        </Contexto.Provider>
      </main>

      <Rodape/>
    </div>
  )
}