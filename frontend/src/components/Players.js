import React, {useState,useEffect} from "react";
import axios from "axios";

const Players = () => {
  const [players, setPlayers] = useState("")

    var url = "https://virtual-ninjas-backend.herokuapp.com/api/player-count";
   
    useEffect(() => {
      axios.get(url).then((response) => {
        setPlayers(response.data);
        console.log(response.data)
      });
    }, []);
  

return (
    <div>
      <p>{players.data}</p>
    </div>
)
}

export default Players