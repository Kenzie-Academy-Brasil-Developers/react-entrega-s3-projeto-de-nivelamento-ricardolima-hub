import CartItem from "../CartItem";
import { CartContainer, Container } from "./styles";


export default function Cart ({ currentSale, totalDiscount, totalPrice, totalValue, removeToCart}) {
    console.log(currentSale)
    return (
        <Container>
            <div>
                <h1>Carrinho</h1>
                <p>Total da compra: {totalPrice}</p>
                <p>Total de desconto: {totalDiscount}</p>
                <p>Valor Total: {totalValue}</p>
            </div>
            <CartContainer>
                {currentSale.map((item, index) => {
                return <CartItem key={index} products={item} handleClick={removeToCart}/>
                })}
            </CartContainer>
        </Container>
    )
}
