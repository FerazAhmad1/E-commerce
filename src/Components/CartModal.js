import React, { useState } from "react";
import "./CartModal.css";
import Context from "../store/Cart-Context";
import { useContext } from "react";
import Modal from "./Modal";
import axios from "axios";
const CartModal = () => {
  const ctx = useContext(Context);
  const [remove, setRemove] = useState(false);
  const cartItems = ctx.items;
  let email = localStorage.getItem("email").replace(/[^a-zA-Z0-9]/g, "");
  let totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  totalAmount = totalAmount.toFixed(2);

  const removeHandler = async (event, id) => {
    const index = ctx.items.findIndex((item) => item.id === id);
    const _id = ctx.items[index]._id;

    const remove = await axios.delete(
      `https://crudcrud.com/api/a25b7fadbb7b44ea96ddd4c01371d746/cart${email}/${_id}`
    );

    event.preventDefault();
    ctx.removeItem(id);
  };
  return (
    <div className="cartmodal">
      <div className="description">
        <h1>ITEM</h1>
        <h1>PRICE</h1>
        <h1>QUANTITY</h1>
      </div>
      <div>
        <div>
          {cartItems.map((item) => (
            <div className="description__item">
              <div className="box">
                <img src={item.imageUrl} />
                <p>{item.title}</p>
              </div>
              <div className="box">
                <p>{item.price}</p>
              </div>
              <div className="box">
                <input />
                <button
                  onClick={(event) => removeHandler(event, item.id)}
                  className="btn">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>Total Amount</div>
      <div>{totalAmount}</div>
    </div>
  );
};

export default CartModal;
