import {  Route, BrowserRouter, Routes } from "react-router-dom";
import React, {useState} from "react";
import "./styles.css";
import Networking from "./components/Networking/Networking";
import Lobby from "./components/Lobby/Lobby";
import Main from "./components/Main";

export default function App() {
  
  return (
    <div className="wrapper">
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Main />} />
   <Route path="/networking" element={<Networking />} />
   <Route path="/lobby" element={<Lobby />} />
 </Routes>
 </BrowserRouter>
     
    </div>
  );
}
