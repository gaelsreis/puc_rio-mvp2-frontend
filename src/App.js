import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './elementos/Inicio'
import Cardapio from './elementos/Cardapio'
import Promocao from './elementos/Promocao'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/cardapio/:url' element={<Cardapio />}></Route>
          <Route path='/promocao/' element={<Promocao />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}