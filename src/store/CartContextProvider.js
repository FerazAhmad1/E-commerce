import Context from "./Cart-Context";
import axios from "axios";

import React, { useReducer } from "react";
const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  let updateItems;
  let updateAmount;
  if (action.type === "ADD") {
    const findIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (findIndex >= 0) {
      alert("This item is already added to the cart ");
      return {
        items: state.items,
        totalAmount: state.totalAmount,
      };
    }

    // const post = await axios.post(
    //   `https://crudcrud.com/api/19e9e5e23f5741538a5bbe001bb3acb3/data${email}`,
    //   {
    //     ...action.item,
    //   }
    // );

    updateItems = state.items.concat(action.item);
    updateAmount = state.totalAmount + 1;

    return {
      items: updateItems,
      totalAmount: updateAmount,
    };
  }

  if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => item.id === action.id);
    // const Id = state.items[index]._id;
    // const delet = await axios.delete(
    //   `https://crudcrud.com/api/19e9e5e23f5741538a5bbe001bb3acb3/data${email}${[
    //     Id,
    //   ]}`
    // );
    updateItems = state.items.filter((item) => {
      return item.id !== action.id;
    });

    updateAmount = state.items.length;
    return {
      items: updateItems,
      totalAmount: updateAmount,
    };
  }

  return defaultState;
};

const CartContextProvider = (props) => {
  const [cartSatae, dispatch] = useReducer(cartReducer, defaultState);

  const cartItemToHandler = (product) => {
    dispatch({ type: "ADD", item: product });
  };
  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const loginHandler = (token) => {
    dispatch({ type: "login", token: token });
  };

  const contextValue = {
    items: cartSatae.items,
    totalAmount: cartSatae.totalAmount,
    addItem: cartItemToHandler,
    removeItem: removeItemFromCart,
    login: loginHandler,

    isLoggedin: false,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default CartContextProvider;
