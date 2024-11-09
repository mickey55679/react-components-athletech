import './App.css';
import React from "react";
import {Checkout, LoginForm, MyGallery, ProductCard, ShoppingCart} from './Components/index'



export default function MyApp() {
  return (
    <div>
      <h1>Gallery Component</h1>
      <MyGallery />
      <h2>Login Component</h2>
      <LoginForm />
      <h3>Product Component</h3>
      <ProductCard />
      <h4>Checkout Component</h4>
      <Checkout />
      <h5>Shopping Cart</h5>
      <ShoppingCart />
    </div>
  );
}

