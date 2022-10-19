import React, {useContext} from 'react'
import Context from '../store/Cart-Context'

const AddToCart = (props) => {
    
    const ctx = useContext(Context)

     const clickHandler = ()=>{
        console.log(props.item)
        ctx.addItem({
           id:props.item.title,
           title: props.item.title,

           price: props.item.price
        })
     }
  return (
    <div>
        <button onClick={clickHandler}>{props.children}</button>
    </div>
  )
}

export default AddToCart