import React, { useState } from "react";
import { Container, Jumbotron } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loginpage from "./Loginpage";
import Axios from "axios";
import LogoMagnid from "./LogoMagnid";
import Players from "./Players";
import HelpIcon from '@mui/icons-material/Help';

const url = "https://virtua-ninjas.herokuapp.com/api/";
const room_name = "networking";

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
        <LogoMagnid />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridGap: 20,
          }}
        >
          <div className="boxes">
            {" "}
            <Players />
            <h3>
              To join, enter the following code in Altspace in your VR headset:
            </h3>
            <p
              style={{
                color: "#FE2E86",
                fontWeight: "700",
                fontSize: "45px",
                paddingBottom: "25px",
              }}
            >
             <code>OII687</code> 
            </p>{" "}
            <a
              style={{ textDecoration: "none" }}
              href="altspace://account.altvr.com/api/spaces/networking-world-6619"
            >
              Join on a PC or Mac.
            </a>
          </div>
        </div>

      
      </div>
      <div className="boxes1">
        
        <HelpIcon/> <a  style={{ textDecoration: "none", color:"black" }} href="https://alexanderpilotto.de/suco/setup?user=vrtest">I need help</a> 
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
     
        .intro-logo {
          display: flex;
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

export default Welcome;
