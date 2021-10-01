import Products from "../Products"
import { Container } from "./styles"

export default function DisplayProducts({products, handleClick}) {
    return (
        <Container>
            {products.map((larissa, index) => {
                return <Products key={index} products={larissa} handleClick={handleClick}/>
            })}
        </Container>
    )
}
