import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./styles.css";
import Networking from "./components/Networking/Networking";
import Lobby from "./components/Lobby/Lobby";
import Main from "./components/Main";
import Novr from "./components/Networking/Novr";

export default function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/novr" element={<Novr />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
