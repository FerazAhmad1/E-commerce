import React from "react";
import "./CartModal.css";
import Context from "../store/Cart-Context";
import { useContext } from "react";
import Modal from "./Modal";
const CartModal = () => {
  const ctx = useContext(Context);

  const cartItems = ctx.items;
  let totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  totalAmount = totalAmount.toFixed(2);
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
                <button onClick={() => ctx.removeItem(item.id)} className="btn">
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
