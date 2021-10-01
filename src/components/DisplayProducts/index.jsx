import Products from "../Products"

export default function DisplayProducts({products, handleClick}) {
    return (
        <div>
            {products.map((larissa, index) => {
                return <Products key={index} products={larissa} handleClick={handleClick}/>
            })}
        </div>
    )
}
