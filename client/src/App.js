import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import SignUp from "./SignUp";
import Login from "./Login"
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}