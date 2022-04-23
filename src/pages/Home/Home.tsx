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
      </Card>
    </div>
  );
};

export default Home;
