import React from "react";
import Title from "../Components/Title";
import Product from "../Components/Product";
import "./Store.css";
import Context from "./Cart-Context";
import { useContext } from "react";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const MerchProducts = [
  {
    title: "T-Shirts",

    price: 19.99,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
  },

  {
    title: "Cofee Cup",

    price: 6.99,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
  },
];

const Store = (props) => {
  const ctx = useContext(Context);
  const totalAmount = ctx.items.length;
  const cartHandler = () => {
    props.onClick(true);
  };
  return (
    <div>
      {" "}
      <Title>
        {" "}
        <h1>The Generics</h1>{" "}
      </Title>
      <Product products={productsArr} title={"MUSIC"} />
      <Product products={MerchProducts} title={"MERCH"} />
      <button>see Cart</button>
      <div className="cart">
        <button onClick={cartHandler} className="btn">
          Cart{totalAmount}
        </button>
      </div>
    </div>
  );
};

export default Store;
