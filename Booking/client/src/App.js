import Login from "./auth/Login";
import React from "react";
import Register from "./auth/Register";
import Home from "./booking/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNav from "./components/TopNav";

function App() {
  return (
    <BrowserRouter>
    <TopNav/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;