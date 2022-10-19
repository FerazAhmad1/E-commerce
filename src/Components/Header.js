import React ,{useContext} from 'react'
import Button from './Button'
import classes from './Header.module.css'
import Context from '../store/Cart-Context'
import { Link } from 'react-router-dom'

const Header = () => {
  const ctx = useContext(Context)

  return (
    <div className={classes.header}>
        <Button><Link to={''}>Home</Link></Button>
        <Button>STORE</Button>
        <Link to='/about' >About</Link>
       <Button>Cart</Button>
       <span>{ctx.totalAmount}</span>
    </div>
  )
}

export default Header