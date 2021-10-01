import { Container } from "../CartItem/styles";

export default function CartItem({ products: {code, name, description, price, discount}, handleClick }) {
    return (
        <Container>
            <ul>
                <li>{code}</li>
                <li>{name}</li>
                <li>{description}</li>
                <li>{price}</li>
                <li>{discount}</li>
            </ul>
            <button onClick={() => handleClick(code)}>Remover do carrinho</button>
        </Container>
    )
}
