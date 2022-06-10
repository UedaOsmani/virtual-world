import {  Route, BrowserRouter, Routes } from "react-router-dom";
import React, {useState} from "react";
import "./styles.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

export default function App() {
  
  return (
    <div className="wrapper">
 <BrowserRouter>
 <Routes>
   <Route path="/networking" element={<Dashboard />} />
   <Route path="/lobby" element={<Preferences />} />
 </Routes>
 </BrowserRouter>
     
    </div>
  );
}
