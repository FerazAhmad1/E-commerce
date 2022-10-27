import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Title from "./Components/Title";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import CartContextProvider from "./store/CartContextProvider";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import ProductDetail from "./Components/ProductDetail";
import Login from "./Components/Login";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const MerchProducts = [
  {
    title: "T-Shirts",

    price: 19.99,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
  },

  {
    title: "Cofee Cup",

    price: 6.99,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
  },
];

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/product/:productId"
            element={<ProductDetail products={productsArr} />}
          />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/about"
            element={
              <React.Fragment>
                <Title>
                  {" "}
                  <h1>The Generics</h1>{" "}
                </Title>
                <About></About>
              </React.Fragment>
            }
          />
          <Route
            path="/store"
            element={
              <React.Fragment>
                <Title>
                  {" "}
                  <h1>The Generics</h1>{" "}
                </Title>
                <Product products={productsArr} title={"MUSIC"} />
                <Product products={MerchProducts} title={"MERCH"} />
                <button>See Cart</button>
              </React.Fragment>
            }
          />
          <Route path="login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
