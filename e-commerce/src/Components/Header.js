import React from 'react'
import Button from './Button'
import classes from './Header.module.css'

const Header = () => {

  return (
    <div className={classes.header}>
        <Button>HOME</Button>
        <Button>STORE</Button>
        <Button>ABOUT</Button>
       <Button>Cart</Button>
    </div>
  )
}

export default Header