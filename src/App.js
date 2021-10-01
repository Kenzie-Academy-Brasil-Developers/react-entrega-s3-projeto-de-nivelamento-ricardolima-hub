import { useState } from 'react';
import GlobalStyle from './styles/global';
import Cart from './components/Cart';
import DisplayProducts from './components/DisplayProducts';
import FormRegister from './components/FormRegister';

function App() {

  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  const [currentSale, setCurrentSale] = useState([]);

  const handleAdd = (itemCode) => {
    const filtered = products.find((item) => item.code === itemCode)
    if (!currentSale.includes(filtered)) {
      setCurrentSale([...currentSale, filtered])
    }
  }

  const removeToCart = (itemCode) => {
    const output = currentSale.filter((item) => item.code !== itemCode)
    setCurrentSale(output)
  }

  //console.log(currentSale)
  //console.log(products)

  const totalDiscount = currentSale.reduce((acc, item) => acc + item.discount, 0).toFixed(2);
  const totalPrice = currentSale.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  const totalValue = totalPrice - totalDiscount;


  return (
    <div className="App">
      <GlobalStyle />  
        <Cart 
          currentSale={currentSale} 
          totalDiscount={totalDiscount} 
          totalPrice={totalPrice}
          totalValue={totalValue}
          removeToCart={removeToCart}
        />
        <FormRegister products={products} setProducts={setProducts}/>
       <DisplayProducts products={products} handleClick={handleAdd}/>
    </div>
  );
}

export default App;
