import React, { useState } from "react";
import LogoMagnid from "./LogoMagnid";

const Main = () => {
  return (
    <header>
      <div className="intro-logo jumbo-bg">
        <div>
          <LogoMagnid />
        </div>

        <h2>Welcome to Magnid</h2>

        <h3>
          <a href="/Networking">Networking </a>
        </h3>
        <h3><a href="/Lobby">Lobby</a></h3>

        <div className="company-icons">
          <p style={{ color: "white" }}>
            © 2021 Magnid GmbH, All Rights Reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        header {
          margin-bottom: 1rem;
          height: 100vh;
        }
        .intro-logo {
          display: flex;
          position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        }

        .intro-logo h2 {
          margin-top: 10px;
          font-size: 1.8em;
          font-weight: 900;
          font-family: "Philosopher", sans-serif;
          color: white;
        }
        @media (min-width: 768px) {
          .intro-logo h1 {
            font-size: 3.5em;
          }
        }
        .intro-logo h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          margin-bottom: 5px;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
      `}</style>
    </header>
  );
};

export default Main;
