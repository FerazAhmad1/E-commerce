import React, { useEffect } from "react";
import Title from "../Components/Title";
import Product from "../Components/Product";
import "./Store.css";
import Context from "./Cart-Context";
import { useContext } from "react";
import axios from "axios";

let email;
if (localStorage.getItem("email")) {
  email = localStorage.getItem("email").replace(/[^a-zA-Z0-9]/g, "");
}
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
  const totalAmount = ctx.items.reduce((acc, crr) => {
    return acc + 1;
  }, 0);
  // let email = localStorage.getItem("email").replace(/[^a-zA-Z0-9]/g, "");
  // const totalAmount = await axios.get(
  //   `https://crudcrud.com/api/19e9e5e23f5741538a5bbe001bb3acb3/data${email}`
  // ).length;
  const cartHandler = () => {
    props.onClick(true);
  };

  useEffect(() => {
    let response;
    console.log("yyyyyyyyyyyy");
    const postdata = async function () {
      response = await axios.get(
        `https://crudcrud.com/api/a25b7fadbb7b44ea96ddd4c01371d746/cart${email}`
      );
      console.log(response.data);
      ctx.addItem(response.data);
    };
    postdata();

    if (response) {
    } else {
      return;
    }
  }, []);

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
