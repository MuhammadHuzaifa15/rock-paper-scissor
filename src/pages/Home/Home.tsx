import React from "react";
import { Button } from "../../components/Common";

import "./Home.scss";

const Home = function () {
  return (
    <div id="home-page-container">
      <h1>Rock Paper and Scissors</h1>
      <Button type="primary">Play with computer</Button>
      <Button>Watch a Match</Button>
    </div>
  );
};

export default Home;
