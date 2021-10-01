import { useState } from "react";
import { Container } from "./styles";

export default function FormRegister({products, setProducts}) {

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");


    const handleForm = () => {
        setProducts([...products, {
            code: Number(code), 
            name: name, 
            description: description, 
            price: Number(price), 
            discount: Number(discount)
        }])
    }
    

    return (
        <Container>
            <div>
                <label>Código do Produto</label>
                <input type="text" label="Código" placeholder="Código do Produto" value={code} onChange={(e) => setCode(e.target.value)}/>
            </div>
            <div>
                <label>Nome do Produto</label>
                <input type="text" label="Nome do Produto" placeholder="Nome do Produto" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Descrição do Produto</label>
                <input type="text" label="Descrição do Produto" placeholder="Descrição do Produto" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <label>Preço do Produto</label>
                <input type="text" label="Preço" placeholder="Preço" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Desconto</label>
                <input type="text" label="Desconto" placeholder="Desconto" value={discount} onChange={(e) => setDiscount(e.target.value)}/>
            </div>
            <div>
                <button onClick={handleForm}>Adicionar produto</button>
            </div>
        </Container>
    )
}
