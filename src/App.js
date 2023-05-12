// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import ShopInput from "./components/ShopInput";

const DummyProducts = [
  // { title: "Mouse", price: 600, description: "First product" },
  // { title: "Keyboard", price: 1200, description: "Second product" },
  // { title: "Monitor", price: 1500, description: "Third product" },
  // { title: "Printer", price: 2500, description: "Fourth product" },
  // { title: "Scanner", price: 3500, description: "Fifth product" },
];

function App() {
  const [products, setProducts] = useState(DummyProducts);

  const addShopHandlers = (products) => {
    setProducts((prevProduct) => {
      return [products, ...prevProduct];
    });
  };

  return (
    <div>
      <ShopInput onAddShop={addShopHandlers} />
      <Product items={products} />
    </div>
  );
}

export default App;
