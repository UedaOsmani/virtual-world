import React, { useState } from "react";
import { Container, Jumbotron } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loginpage from "./Loginpage";
import Axios from "axios";
import LogoMagnid from "./LogoMagnid";

const Welcome = () => {
  // const url = "https://virtual-ninjas-backend.herokuapp.com/api/event/join";
  // const [data, setData] = useState({
  //   name: "",
  //   roomNr: "1",
  //   message: ""
  // });

  // function handle(e) {
  //   const newdata = { ...data };
  //   newdata[e.target.id] = e.target.value;
  //   setData(newdata);
  //   console.log(newdata);
  // }
  // function submit(e) {
  //   e.preventDefault();
  //   Axios.post(url, {
  //     name: data.name,
  //     roomNr: "1",
  //   }).then((res) => {
  //    setData({ message: "You are entering the room!" });
  //   });
  // }



  return (
    <header>
      <div className="intro-logo jumbo-bg">
        <div>
          <LogoMagnid />
        </div>

        <h1>Welcome to Magnid</h1>
        <h3>
         First time? <a> Get started </a>
        </h3>
        <h3>Already installed Altspace on VR? Enter the code <span style={{color:"blue", fontWeight:"700"}}>PDG162</span> </h3>
        <h3>No headset available? Join <a href="altspace://account.altvr.com/api/spaces/philip-s-world-9152">here</a> </h3>
        {/* {data.message && <h3 className=""> {data.message} </h3>}
        <form onSubmit={(e) => submit(e)} style={{ paddingBottom: "10px" }}>
          <label style={{ color: "white" }}>
            Your Name:{" "}
            <input
             required
              onChange={(e) => handle(e)}
              id="name"
              value={data.name}
              type="text"
              placeholder="name"
              name="name"
            />
          </label>
          <button className="intro-button">Enter</button>
        </form>  */}
        <img style={{ width: "19%" }} src="/animation-vr-man-dribbble.gif" />
        <img
          style={{ width: "19%" }}
          src="/5ffd86ccac7b0153b653786d_8_200106_PR_VE_overview_01-500kb.jpg"
        />

        <div className="company-icons">
          <p style={{ color: "white" }}>
            © 2021 Magnid GmbH, All Rights Reserved.
          </p>
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
          font-weight: 300;
          color: white;
          margin-bottom: 2em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
      `}</style>
    </header>
  );
};

export default Welcome;
