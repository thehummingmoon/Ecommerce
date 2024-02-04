// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import  productDetails  from "./pages/productDetails/productDetails";

const App = () => {
  return (
    <Router>
      <div className="App">
          <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pages/productDetails" element={<productDetails />} />
          {/* Add additional routes as needed */}
      </div>
    </Router>
  );
};

export default App;
