
import './App.css';
import Header from './Components/Header';
import Title from './Components/Title';
import Product from './Components/Product';
import Footer from './Components/Footer';
import CartContextProvider from './store/CartContextProvider';
import {Route,Routes} from 'react-router-dom'
import About from './Components/About';
import React from 'react';

const productsArr = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
 
  
  ]
const MerchProducts = [
  {
    title: 'T-Shirts',
  
    price:19.99,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
  },

  {
    title: 'Cofee Cup',
  
    price:6.99,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
  }
]

function App() {
  return (
    <CartContextProvider>
    <div className="App">
      <Header/>
     <Title></Title>
     <Routes>

     <Route path='/about' element={<About></About>} />
      <Route path='/' element={ <React.Fragment>
        <Product products={productsArr} title={'MUSIC'}/>
        <Product products={MerchProducts} title={"MERCH"}/>
        <button>See Cart</button>

        </React.Fragment> }/>
       
     </Routes>


     <Footer/>

    </div>
    </CartContextProvider>
  );
}

export default App;
