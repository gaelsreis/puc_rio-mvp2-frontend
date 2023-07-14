import { useState, useContext } from "react"
import { Contexto } from "../elementos/Cardapio"

export default function QuantityBuy(props) {
    const [quantity, setQuantity] = useState(1)
    const [valueButton, setValueButton] = useState(true)

    const product = props.product
    const setCount = useContext(Contexto)

    const minus = () => {
        (quantity - 1) === 1 ? setValueButton(true) : setValueButton(false)
        if (quantity !== 1) {setQuantity(quantity - 1)}
    }

    const plus = () => {
        setValueButton(false)
        setQuantity(quantity + 1)
    }

    const buyProduct = () => {
        if (window.confirm(`Preço final de ${product.title}: R$ ${Math.round((product.price * quantity) * 100) / 100}`)) {
            setQuantity(1)
            setCount(value => value + Math.round((product.price * quantity) * 100) / 100)
        }
    }

    return (
    <div className="item-botoes">
        <div className="quantity">
            <button disabled={valueButton} className="menos" onClick={minus}>-</button>
            <span>{quantity}</span>
            <button className="mais" onClick={plus}>+</button>
        </div>
        <button className="botao" onClick={buyProduct}>Pedir</button>
    </div>
    );
}