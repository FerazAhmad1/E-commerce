import Context from "./Cart-Context";

import React, { useReducer } from 'react'
const defaultState={
    items:[],
    totalAmount:0
}
const cartReducer = (state,action)=>{
    let updateItems
    let updateAmount
    console.log(state)
    if(action.type==='ADD'){
        const findIndex = state.items.findIndex((item)=>item.id===action.item.id)
        

    
         updateItems=   state.items.concat(action.item)
         updateAmount =state.totalAmount+1
         return {
            items:updateItems,
            totalAmount:updateAmount,
          };
    }

  return defaultState
}

const CartContextProvider = (props) => {
      const [cartSatae,dispatch]  =  useReducer(cartReducer,defaultState)
    const cartItemToHandler = (product)=>{
        dispatch({type:'ADD',item:product,})
    }
    const removeItemFromCart = (id)=>{
        dispatch({type:'REMOVE',id:id})
    }
    const contextValue = {
        items:cartSatae.items,
        totalAmount:cartSatae.totalAmount,
        addItem:cartItemToHandler,
        removeItem:removeItemFromCart
    }
  return (

    <Context.Provider value = {contextValue} >
        {props.children}
    </Context.Provider>
  )
}

export default CartContextProvider