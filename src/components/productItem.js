import React from "react";
import { useParams } from "react-router-dom";
import Shoe from "./../shoe.json";
function ProductItem() {
  const { id } = useParams();
  const shoes = Shoe[id];
  console.log(shoes);
  if (!shoes) {
    return <h1>Product not Found</h1>;
  }
  return (
    <div>
      <h1>Welcome to productItem</h1>
      <div className="productdiv">
        <h4>{shoes.name}</h4>
        <img src={shoes.img} alt="" height={500} />
      </div>
      )
    </div>
  );
}

export default ProductItem;
