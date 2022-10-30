import React, { useContext } from "react";
import Context from "../store/Cart-Context";
import axios from "axios";
const AddToCart = (props) => {
  const ctx = useContext(Context);

  const clickHandler = async () => {
    let email = localStorage.getItem("email");
    const index = email.lastIndexOf("@");
    let e = email.split("");

    e.splice(index, 1);
    email = e.join("");
    console.log(email);

    const post = await axios.post(
      `https://crudcrud.com/api/c10ca089fde04d3b9b77179ebc2cf942/data/user/${email}`,
      {
        id: props.item.title,
        title: props.item.title,
        imageUrl: props.item.imageUrl,
        price: props.item.price,
      }
    );
    console.log(post);

    // ctx.addItem({
    //   id: props.item.title,
    //   title: props.item.title,
    //   imageUrl: props.item.imageUrl,
    //   price: props.item.price,
    // });
    // const post = axios.post('https://crudcrud.com/api/c10ca089fde04d3b9b77179ebc2cf942/user/')
  };
  return (
    <div>
      <button onClick={clickHandler}>{props.children}</button>
    </div>
  );
};

export default AddToCart;
