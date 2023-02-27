import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProductList from './Components/ProductList/ProductList';
import ProductsDetail1 from './Components/ProdutsDetails/ProductsDetail1';
import ProductsDetail2 from './Components/ProdutsDetails/ProductDetail2';
import { useEffect, useState } from "react";
import Cart from './Components/Cart/Cart';
import Search from './Components/Search/Search';


function App() {

  const [cart, setCart] = useState([])

  function add_cart(value1) {
    setCart([...cart, { quantity: 1, ...value1 }])
  }

  function f1(value2) {
    setCart([...cart, { quantity: 1, ...value2 }])
  }

  return (
    <div className='App'>
      <Router>
        <Header count={cart.length} />
        <Routes>
          <Route index element={<Home add_cart={add_cart} />}></Route>
          <Route path="/producters/:id" element={<ProductsDetail1 />}></Route>
          <Route path="/products/:id" element={<ProductsDetail2 f1={f1} />}></Route>
          <Route path="/products/category/:type" element={<ProductList />}></Route>
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
          <Route path="/search_products" element={<Search />} />
          <Route path="/*" element={<h1>Error</h1>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
