import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import NavBar from './components/navbar';
import CartWidget from './components/cartwidget';
import Catalog from './components/catalog';
import ItemDetailContainer from './components/itemdetailcontainer';
import Checkout from './components/checkout';
import Brief from './components/brief';
import Login from './components/login';
import { CartProvider } from './components/cartcontext';
import Home from './components/home';
import Cart from './components/cart';
import CategoryProducts from './components/categoryproducts';
import ItemDetail from './components/itemdetail';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category/:categoryName" element={<Catalog />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/brief" element={<Brief />} />
            <Route path="/order-summary" element={<OrderSummary />} /> 
            <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/item/:id" component={ItemDetail} />
        <Route path="/categories/:categoryId" component={CategoryProducts} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;