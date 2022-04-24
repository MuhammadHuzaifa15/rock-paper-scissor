import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createRoom as createRoomAction } from "../../redux/actions/room.action";
import { Button } from "../../components/Common";

import "./Home.scss";
import { Card } from "antd";

const Home = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createRoom = (roomType: string) => {
    dispatch(createRoomAction(roomType));
    navigate("room");
  };

  return (
    <div id="home-page-container">
      <Card>
        <h1>Rock Paper and Scissors</h1>
        <Button onClick={() => createRoom("play")} type="primary">
          Play with computer
        </Button>
        <Button onClick={() => createRoom("watch")}>Watch a Match</Button>
        <br />
        <br />
        <h2>Rules:</h2>
        <ul>
          <li>If players show the same things, they go again.</li>
          <li>
            If one player picks rock and one scissors, the player who showed
            rock wins the dispute. To explain this, say rock crushes scissors
            (no need to actually crush).
          </li>
          <li>
            If one player picks scissors and the other paper, the player who
            showed scissors succeeds. Scissors cuts paper.
          </li>
          <li>
            If a player shows paper while the other shows rock, the player who
            picked paper succeeds. Paper covers rock.
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Home;
