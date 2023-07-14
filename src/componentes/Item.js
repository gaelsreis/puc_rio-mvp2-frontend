import {Link} from "react-router-dom";
import QuantityBuy from "./QuantityBuy";

export default function Item(props) {
    const product = props.product
    return (
        <article className="item">
            <p className="item-titulo">{product.title}</p>
            <img src={product.image} alt="produto" />
            <p className="item-preco">R$ {product.price}</p>
            <Link to={`/cardapio/${product.category}/${product.id}`} state={{p:product}} target={"desc"}>Descrição</Link>
            <QuantityBuy product={props.product} />
        </article>
    );
}