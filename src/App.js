import './App.css';
import React from "react";
import {Checkout, LoginForm, MyGallery, ProductCard, Navbar} from './Components/index'



export default function MyApp() {
  return (
    <div>
      <h1>Navbar</h1>
      <Navbar />
      <h2>Gallery Component</h2>
      <MyGallery />
      <h3>Login Component</h3>
      <LoginForm />
      <h4>Product Component</h4>
      <ProductCard />
      <h5>Checkout Component</h5>
      <Checkout />
    </div>
  );
}

