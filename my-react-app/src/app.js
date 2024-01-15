import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar'
import CartWidget from './components/cartwidget';
import Catalog from './components/catalog';
import ProductDetail from './components/productdetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/category/:categoryName" element={<Catalog />} />
          <Route path="/item/:itemId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;