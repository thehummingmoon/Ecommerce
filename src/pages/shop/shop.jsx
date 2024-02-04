import React from "react";
import { products } from "./Ecommerce-boilerplate/db.json";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>ShopKart</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <products data={product} />
        ))}
      </div>
    </div>
  );
};