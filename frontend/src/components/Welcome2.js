import React, {useState} from "react";
import { Container, Jumbotron } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loginpage from "./Loginpage";
import Axios  from "axios";
import LogoMagnid from "./LogoMagnid";

const Welcome2 = (props) => {

  return (
    <header>
         <div className="intro-logo jumbo-bg">
      <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: 20,
          }}
        >
          <div className="boxes">
            <img style={{ width: "33%" }} src="/questions.gif" />
            <h3>
              First time in VR? <br />{" "}
              <a href="https://alexanderpilotto.de/suco/setup?user=vrtest">
                {" "}
                Get Started!{" "}
              </a>
            </h3>
          </div>
          <div className="boxes">
            {" "}
            <img
              style={{ width: "46%" }}
              src="/animation-vr-man-dribbble.gif"
            />
            <h3>
              Have you already installed Altspace on VR? <br /> Enter the code{" "}
              <span style={{ color: "blue", fontWeight: "700" }}>OII687</span>{" "}
              to join the event.{" "}
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

export default Welcome2;
