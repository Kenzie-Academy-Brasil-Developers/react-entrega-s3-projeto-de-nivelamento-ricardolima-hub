import Products from "../Products"
import { Container } from "./styles"

export default function DisplayProducts({products, handleClick}) {
    return (
        <Container>
            {products.map((item, index) => {
                return <Products key={index} products={item} handleClick={handleClick}/>
            })}
        </Container>
    )
}
