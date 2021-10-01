import { Container } from "./styles";


export default function Products({ products: {code, name, description, price, discount}, handleClick}) {
    return (
        <Container>
            <ul>
                <li>{code}</li>
                <li>{name}</li>
                <li>{description}</li>
                <li>{price}</li>
                <li>{discount}</li>
            </ul>
            <button onClick={() => handleClick(code)}>Adicionar ao carrinho</button>
        </Container>
    )
}
