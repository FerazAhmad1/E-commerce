import React from 'react'

import Button from './Button'
import classes from './Product.module.css'
import AddToCart from './AddToCart'



const Product = (props) => {
    const productsArr = [...props.products]
  return (
   <section className={classes.section}>
    <h2>{props.title}</h2>
  <div className={classes.grid}>
    {productsArr.map((product)=> <div key={product.title}>
                        <div>
                                <h3>{product.title}</h3>
                                <img src= {product.imageUrl} alt='album1' ></img>

                        </div>
                        <div className='product-details'>
                                <span>$</span>
                                <span>{product.price}</span>
                               <AddToCart item={product}>Add To Cart</AddToCart>
                        </div>
            </div>)
           
}
           
  </div>
    
   </section>
  )
}

export default Product