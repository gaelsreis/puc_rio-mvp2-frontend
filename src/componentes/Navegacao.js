import {Link} from "react-router-dom";

export default function Navegacao() {
  return (
    <nav>
      <Link to='/cardapio/entrada'>ENTRADAS</Link>
      <Link to='/cardapio/refeicao'>REFEIÇÕES</Link>
      <Link to='/cardapio/lanche'>LANCHES</Link>
      <Link to='/cardapio/sobremesa'>SOBREMESAS</Link>
      <Link to='/cardapio/bebida'>BEBIDAS</Link>
    </nav>
  );
}