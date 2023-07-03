import React from "react";
import Shoe from "./../shoe.json";
import { Link } from 'react-router-dom'
import "./Product.css";
function Product() {
  console.log(Shoe);
  return (
    <div>
      <h1>Welcome To Product</h1>
      <div className="productContainer">
        {Object.keys(Shoe).map((keyName) => {
          const Shoes = Shoe[keyName];
          return (
            <Link className="productdiv" key={keyName} to={keyName}>
              <h4>{Shoes.name}</h4>
              <img src={Shoes.img} alt="" height={150} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
