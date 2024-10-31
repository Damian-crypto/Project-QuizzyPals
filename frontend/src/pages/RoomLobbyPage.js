import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import axios from "axios";

import "./RoomLobbyPage.css";
import ButtonComponent from "../components/ButtonComponent";
import {
  List,
  ListItem,
  ListItemText,
  responsiveFontSizes,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRoomContext } from "../hook/useRoomContext";
import { useEffect } from "react";
import { useAuthContext } from "../hook/useAuthContext";

const RoomLobbyPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { room } = useRoomContext();
  const { user } = useAuthContext();

  const [playersInRoom, setPlayersInRoom] = useState([
    "Player 1",
    "Player 2",
    "Player 3",
  ]);

<<<<<<< HEAD
  const requestHeaders = {
    headers: {
      Authorization: `Bearer ${user.userJWT}`,
      "Content-Type": "application/json",
    },
  };

  const getAndSetRoomPlayers = async (roomId) => {
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/rooms/getroommates/${roomId}`,
        requestHeaders
      )
      .then((response) => {
        if (response.status === 200) {
          const players = [];
          for (let player of response.data) {
            players.push(player.email);
          }

          setPlayersInRoom(players);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleStartGameButton = async (e) => {
    const gameData = {
      userId: user.userId,
=======
  const handleStartGameButton = async (e) => {
    const requestHeaders = {
      headers: {
        Authorization: `Bearer ${user.userJWT}`,
        "Content-Type": "application/json",
      },
    };

    const gameData = {
      userId: "67239ece1548044649dcf042",
>>>>>>> cbb3a87 (quiz creation implementation is in progress)
      durationHours: 0,
      durationMinutes: 10,
    };

    await axios
      .post(
        "http://localhost:4000/api/game/startgame",
        gameData,
        requestHeaders
      )
      .then((response) => {
<<<<<<< HEAD
        if (response.status === 200) {
=======
        if (response.status == 200) {
>>>>>>> cbb3a87 (quiz creation implementation is in progress)
          console.log(response.data);
          if (response.data.message == "Game started") {
            navigate("/createquiz");
          }
        }
      })
      .catch((error) => {
        console.log(error.response.data);
<<<<<<< HEAD
        setError(error.response.data.message);
=======
        setError(error.response.data);
>>>>>>> cbb3a87 (quiz creation implementation is in progress)
      });
  };

  useEffect(() => {
    if (!room) {
      navigate("/");
    }

    getAndSetRoomPlayers(room.roomId);
  }, []);

  return (
    <Grid container columns={16}>
      <Grid size={8}>
        <div className="header-container">
          <div className="header">QuizzyPals</div>
          <div className="start-btn">
            <ButtonComponent
              label={"Start Game"}
<<<<<<< HEAD
              onClick={handleStartGameButton}
=======
<<<<<<< HEAD
              onClick={() => navigate("/createquiz")}
=======
              onClick={handleStartGameButton}
>>>>>>> aedef33 (quiz creation implementation is in progress)
>>>>>>> cbb3a87 (quiz creation implementation is in progress)
            />
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
      </Grid>
      <Grid size={8}>
        <div className="lobby-container">
          <div className="page-title">LOBBY</div>
          <div className="sub-title">Room Id: {room.roomId}</div>

          <div className="player-list-box-outer">
            <div className="players">Players</div>
            <div className="player-list-box-inner">
              <List>
                {playersInRoom.map((item, index) => {
                  let name = item;
                  if (item === room.host) {
                    name += " (Host)";
                  }
                  if (item === user.email) {
                    name += " (Me)";
                  }

                  return (
                    <ListItem key={index}>
                      <ListItemText className="players-list" primary={name} />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default RoomLobbyPage;
