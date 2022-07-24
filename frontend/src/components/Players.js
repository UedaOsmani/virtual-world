import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupIcon from "@mui/icons-material/Group";

const Players = () => {
  const [players, setPlayers] = useState("");

  var url = "https://virtual-ninjas-backend.herokuapp.com/api/getPlayerCount";

  useEffect(() => {
    axios.get(url).then((response) => {
      setPlayers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div style={{ textAlign: "right", paddingRight: "25px" }}>
      <h6 style={{ color: "#505050", fontWeight: "500" }}>
        {" "}
        {players.players_in_Networking} <GroupIcon />
      </h6>
    </div>
  );
};

export default Players;
