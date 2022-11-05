import React, { useContext, useEffect, useState } from "react";
import Context from "../store/Cart-Context";
import axios from "axios";
const AddToCart = (props) => {
  const [post, setPost] = useState(false);
  const ctx = useContext(Context);
  let email = localStorage.getItem("email").replace(/[^a-zA-Z0-9]/g, "");
  const clickHandler = async () => {
    let response;
    const available = ctx.items.findIndex(
      (item) => item.id === props.item.title
    );

    if (available >= 0) {
      alert("this item is already present in your cart");
      return;
    }
    if (available < 0) {
      const { title, ...product } = props.item;

      response = await axios.post(
        `https://crudcrud.com/api/a25b7fadbb7b44ea96ddd4c01371d746/cart${email}`,
        {
          id: title,
          ...product,
        }
      );
      ctx.addItem(response.data);
    }
  };

  return (
    <div>
      <button onClick={clickHandler}>{props.children}</button>
    </div>
  );
};

export default AddToCart;
