import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Common/Loader";
import { Play, Watch } from "../../components/Room";

import "./Room.scss";

const Home = function () {
  const navigate = useNavigate();

  const {
    room: { roomType },
  } = useSelector((state: any) => ({
    room: state.room,
  }));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!roomType) {
      navigate("/");
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="room-page-container">
      {!loading ? (
        <div>
          {roomType === "watch" && <Watch />}
          {roomType === "play" && <Play />}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
