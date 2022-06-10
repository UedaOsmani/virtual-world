import React, {useState} from "react";
import { Container, Jumbotron } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loginpage from "./Loginpage";
import Axios  from "axios";
import LogoMagnid from "./LogoMagnid";

const Welcome2 = (props) => {
  const url="https://frozen-mesa-35935.herokuapp.com/"
  const [data, setData] = useState({
      name:"",
      roomNr:"0"
  })
  
  function handle(e) {
      const newdata = { ...data }
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata)
  }
  function submit(e) {
      e.preventDefault();
    /*  Axios.post(`${url}/event/join`,{
          name:data.name,
          date: date.date,
          roomNr: parseInt(data.roomNr)
      })
      .then(res=> {
          console.log(res.data)
      })
      */
  
      Axios.post(url,{
          name:data.name,
          roomNr: "0"
      })
      .then(res=> {
          alert("You are entering the room!")
      })
  }
  
  return (
    <header>
      <div className="intro-logo jumbo-bg">
          <div> 
 <LogoMagnid />
</div>

<h1>Welcome to Magnid</h1>
<h3>Put your VR headsets on to enter <b style={{color:"#f70041"}}> {props.title} </b> room.</h3>
<form onSubmit={(e) => submit(e)} style={{paddingBottom:'10px'}}>
  <label style={{color:'white'}}>
    Your Name: <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" placeholder="name" />

  </label>
            <button className='intro-button'>Enter</button>
            </form>
<img style={{width:'19%'}} src="/animation-vr-man-dribbble.gif" />
 <img style={{width:'19%'}} src="/5ffd86ccac7b0153b653786d_8_200106_PR_VE_overview_01-500kb.jpg" />
       
        <div className="company-icons">
          <p style={{color:'white'}}>© 2021 Magnid GmbH, All Rights Reserved.</p>
        </div>
      </div>

      <style jsx>{`
       .intro-button {
        margin-left:2px;
      color: white;
      border: 1.2px solid white;
      background-image: linear-gradient(to right, #000a33 15%, #f70041 100%, #000a33 100%);
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
            margin-top:10px;
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

export default Welcome2;
