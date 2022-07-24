import React, { useState } from "react";
import LogoMagnid from "./LogoMagnid";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

const Main = () => {
  return (
    <header>
      <div className="intro-logo jumbo-bg">
        <div>
          <LogoMagnid />
        </div>

        <h2 style={{paddingBottom:"30px"}}>The best event experience</h2>
     <div className="kutia">
      <div className="nr">
        1
      </div>
      <div>
      <Tooltip title="Click here if you own a VR headset" style={{padding:"15px"}}>
      <IconButton>
      <a className="butoni" href="/Networking">
          Standalone VR{" "}
        </a> <InfoIcon />
      </IconButton>
    </Tooltip>
      </div>
    
     </div>
       
     <div className="kutia">
      <div className="nr">
        2
      </div>
    <Tooltip title="Click here if you want to join Vr using your PC" style={{padding:"15px"}}>
      <IconButton>
      <a className="butoni" href="/Lobby">
          Enjoy PC VR mode
        </a><InfoIcon />
      </IconButton>
    </Tooltip>
    </div>
    <div className="kutia">
      <div className="nr">
        3
      </div>
    <Tooltip title="Click here if you don't have a VR headset" style={{padding:"15px"}}>
      <IconButton>
      <a className="butoni" href="/Novr">
          No Headset 
        </a>
<InfoIcon />
      </IconButton>
    </Tooltip>
       
 </div>
      </div>

      <style jsx>{`
        header {
          margin-bottom: 1rem;
          height: 100vh;
        }

        svg {
          color: burlywood;
        }
        .butoni {
          width: 250px;
          font-size: 17px;
          color: #000a33;
          font-weight: 600;
          padding: 12px;
    text-decoration: none;
        }
        .intro-logo {
          display: flex;
          position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .intro-logo h2 {
          margin-top: 10px;
          font-size: 1.8em;
          font-weight: 900;
          font-family: "Philosopher", sans-serif;
          color: #000a33;
        }
        @media (min-width: 768px) {
          .intro-logo h1 {
            font-size: 3.5em;
          }
        }
        .intro-logo h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #000a33;
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
