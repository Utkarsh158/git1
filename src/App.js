// import logo from './logo.svg';
import './App.css';
import Product from './components/Product';


function App() {
  const products = [
    { title: "Mouse", price: 600, description: "First product" },
    { title: "Key", price: 1200, description: "Second product" },
    { title: "Monitor", price: 1500, description: "Third product" },
    { title: "Printer", price: 2500, description: "Fourth product" },
    { title: "Scanner", price: 3500, description: "Fifth product" },
  ];

  return (
    <div className='pro'>
      <h1 align="center" style={{ fontSize: '2.5rem' }}>Shop My</h1>
      <Product items={products} />
    </div>
  );
}

export default App;
