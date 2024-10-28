import './App.css';
import React from "react";
import MyGallery from './Components/Gallery/MyGallery';
import LoginForm from './Components/LoginForm/LoginForm';





export default function MyApp() {
  return (
    <div>
      <h1>Gallery Component</h1>
      <MyGallery />
      <h2>Login Component</h2>
      <LoginForm />
    </div>
  );
}

