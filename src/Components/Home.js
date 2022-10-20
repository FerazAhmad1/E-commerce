import React from 'react'
import Title from './Title'
import classes from './Home.module.css'


const Home = () => {
  return (
    <div className={classes.home}>
        <Title>
          <h1>The Generics</h1>
          <div>
          <h4> Get our latest album</h4>
          </div>
          
        </Title>
        
        <h2> Tours </h2>
        <div className={classes.details}>
          <h3>Date</h3>
          <p>Type</p>
          <p>Destination</p>
          <button>Buy Tickets</button>
        </div>
    </div>
  )
}

export default Home