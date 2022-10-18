import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.items}>
            <h1>The Generics</h1>
            <div className={classes.icons}>
                <span>youtube</span>
                <span>Spotify</span>
                <span>facebook</span>
            </div>
        </div>


        
    </div>
  )
}

export default Footer