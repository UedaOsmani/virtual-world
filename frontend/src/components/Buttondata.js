
import {useState} from 'react';
import axios from 'axios';

const Buttondata = () => {
  const [data, setData] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get('https://frozen-mesa-35935.herokuapp.com/', {
        headers: {
          Accept: 'application/json',
        },
      });

      console.log('data is: ', JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button className='intro-button' onClick={handleClick}>Show data</button>

      {isLoading && <h2 style={{color:"white"}}>Loading...</h2>}

    
          <div className='data2'>
            <h4>Player name: {data.player_0}
           </h4>
            <h4>Room number:
            {data.room_nr}</h4>
       
            <br />
          </div>
     
          <style jsx>{`
      
      .data2 h4{
          color:white;
      }
        .intro-button {
            margin-top:20px;
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: white;
          border: 1.8px solid white;
          background-image: linear-gradient(to right, #000a33 15%, #f70041 100%, #000a33 100%);
          transition: all 0.5s;
          text-decoration: none;
        }
        .intro-button:hover {
          background-image: none;
          color: white;
        }


     
      `}</style>
    </div>
    
  );
};

export default Buttondata