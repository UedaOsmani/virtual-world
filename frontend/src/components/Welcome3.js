import React, { useState } from "react";
const Welcome3 = (props) => {
  return (
    <header>
      <div className="intro-logo jumbo-bg">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridGap: 20,
          }}
        >
          <div className="boxes">
            {" "}
            <img style={{ width: "43%" }} src="/Jfd5.gif" />
            <h3>
              No Headset? No Problem. <br /> Make sure to{" "}
              <a href="https://altvr.com/get-altspacevr/">
                download AltspaceVr.
              </a>{" "}
              <br />
              <a href="altspace://account.altvr.com/api/spaces/networking-world-6619">
                {" "}
                Join 2D mode.
              </a>{" "}
            </h3>
          </div>
        </div>
      </div>
      <style jsx>{`
        .intro-button {
          margin-left: 2px;
          color: white;
          border: 1.2px solid white;
          background-image: linear-gradient(
            to right,
            #000a33 15%,
            #f70041 100%,
            #000a33 100%
          );
          transition: all 0.5s;
          text-decoration: none;
        }
        .intro-button:hover {
          background-image: none;
          color: white;
        }
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

        .intro-logo h1 {
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
          font-size: 1rem;
          font-weight: 600;
          margin: 2em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
      `}</style>
    </header>
  );
};

export default Welcome3;
