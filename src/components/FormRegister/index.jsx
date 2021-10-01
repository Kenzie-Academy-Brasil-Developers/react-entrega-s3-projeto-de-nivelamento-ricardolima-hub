import { useState } from "react";

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
        <div>
            <input type="text" label="Código" placeholder="Código do Produto" value={code} onChange={(e) => setCode(e.target.value)}/>
            <input type="text" label="Nome do Produto" placeholder="Nome do Produto" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" label="Descrição do Produto" placeholder="Descrição do Produto" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" label="Preço" placeholder="Preço" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input type="text" label="Desconto" placeholder="Desconto" value={discount} onChange={(e) => setDiscount(e.target.value)}/>
            <div>
                <button onClick={handleForm}>Adicionar produto</button>
            </div>
        </div>
    )
}
