import React ,{useContext} from 'react'
import Button from './Button'
import classes from './Header.module.css'
import Context from '../store/Cart-Context'
import {  NavLink } from 'react-router-dom'

const Header = () => {
  const ctx = useContext(Context)

  return (
    <div className={classes.header}>
         <NavLink to={''}>HOME</NavLink>
         <NavLink to={'/store'}>STORE</NavLink>
        <NavLink to='/about' >ABOUT</NavLink>
       <Button>Cart</Button>
       <span>{ctx.totalAmount}</span>
    </div>
  )
}

export default Header