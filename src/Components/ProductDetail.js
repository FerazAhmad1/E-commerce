import React from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  const { productId } = useParams();
  const productArr = [...props.products];
  const product = productArr.filter((item) => item.title === productId);
  const [item] = product;
  console.log(item);

  return (
    <div className={classes.detail}>
      <div key={item.title}>
        <div>
          <h3>{item.title}</h3>
          <img src={item.imageUrl} alt="album1"></img>
        </div>
        <div className="product-details">
          <span>$</span>
          <span>{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
